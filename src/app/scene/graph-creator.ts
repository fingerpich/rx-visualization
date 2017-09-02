import {AppService} from '../app.service';
import * as NodeTypes from '../node-types';
declare var d3: any;

export class GraphCreator {
  public static animateTime = 400;

  private consts =  {
    selectedClass: 'selected',
    connectClass: 'connect-node',
    circleGClass: 'conceptG',
    conectorCircle: 'conectorCircle',
    graphClass: 'graph',
    activeEditId: 'active-editing',
    BACKSPACE_KEY: 8,
    DELETE_KEY: 46,
    ENTER_KEY: 13,
    nodeRadius: 50,
  };
  private state = {
    selectedNode: null,
    selectedEdge: null,
    mouseDownNode: null,
    mouseDownLink: null,
    justDragged: false,
    justScaleTransGraph: false,
    lastKeyDown: -1,
    shiftNodeDrag: false,
    selectedText: null,
    graphMouseDown: false,
  };

  private nodes = [];
  private edges = [];
  private connectorLine;
  private connectTarget;
  private svg;
  private svgG;
  private circles;
  private paths;
  private resultCircles;
  private lastResultList;
  private drag;
  private idct = 0;
  private static insertTitleLinebreaks (gEl, title) {
    if (typeof title === 'undefined') { title = 'value'; }
    const words = title.toString().split(/\s+/g),
      nwords = words.length;
    const el = gEl.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-' + (nwords - 1) * 7.5);

    for (let i = 0; i < words.length; i++) {
      const tspan = el.append('tspan').text(words[i]);
      if (i > 0) {
        tspan.attr('x', 0).attr('dy', '18');
      }
    }
  };

  constructor(svg, private appService: AppService) {
    const thisGraph = this;
    const {nodes, edges} = this.appService.getData();
    this.nodes = nodes;
    this.edges = edges;
    this.svg = svg;
    this.svgG = svg.append('g').classed(thisGraph.consts.graphClass, true);
    this.appService.getItemSubscribe().subscribe(this.showResults);
    this.setIdCounterByNodes();
    this.defineArrows();
    this.bindEvents();
    this.appService.refreshRxObjects();
  }
  private setIdCounterByNodes = () => {
    this.idct = Math.max.apply(this, this.nodes.map(n => n.id)) + 1;
  };

  private defineArrows() {
    // define arrow markers for graph links
    const defs = this.svg.append('svg:defs');
    defs.append('svg:marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', '32')
      .attr('markerWidth', 3.5)
      .attr('markerHeight', 3.5)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5');

    // define arrow markers for leading arrow
    defs.append('svg:marker')
      .attr('id', 'mark-end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 7)
      .attr('markerWidth', 3.5)
      .attr('markerHeight', 3.5)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5');

    // displayed when dragging between nodes
    this.connectorLine = this.svgG.append('svg:path')
      .attr('class', 'link hidden')
      .attr('d', 'M0,0L0,0')
      .style('marker-end', 'url(#mark-end-arrow)');
  }
  private bindEvents() {
    const thisGraph = this;
    // svg nodes and edges
    thisGraph.resultCircles = this.svgG.append('g').attr('class', 'resultItems');
    thisGraph.paths = this.svgG.append('g');
    thisGraph.circles = this.svgG.append('g');

    // handle circle drag
    thisGraph.drag = d3.drag()
      .on('drag', this.dragMove)
      .on('end', this.dragEnd);

    // listen for key events
    // d3.select(window).on('keydown', this.svgKeyDown)
    //   .on('keyup', this.svgKeyUp);
    thisGraph.svg.on('mousedown', this.svgClick);
    thisGraph.svg.on(
      'mouseover', (d) => {
        if (this.appService.getCreationOption()) {
          thisGraph.svg.style('cursor', 'crosshair');
          /*semicolon here*/
        } else {
          thisGraph.svg.style('cursor', 'pointer');
        }
      });

    // handle zoom
    thisGraph.svg.call(d3.zoom()
      .scaleExtent([1 / 2, 8])
      .on('zoom', () => {
        thisGraph.svgG.attr('transform', d3.event.transform);
      }));
    thisGraph.svg.on('dblclick.zoom', null);

    // get control commands
    thisGraph.appService.getControlChanges().subscribe((data) => {
      if (data === 'clear') { thisGraph.deleteGraph(false); }
    });
    thisGraph.appService.removeItemSubject.subscribe((data) => {
      thisGraph.removeSelected();
      this.lastResultList = null;
      this.showResults([]);
      this.appService.refreshRxObjects();
    });
  }

  public serialize = () => {
    const thisGraph = this;
    const saveEdges = [];
    thisGraph.edges.forEach(function (val, i) {
      saveEdges.push({source: val.source.id, target: val.target.id});
    });
    const nodesData = thisGraph.nodes.map(node => {
      return {
        id: node.id,
        x: node.x || 0,
        y: node.y || 0,
        node_type: node.data.title,
        properties: node.data.properties,
      };
    });
    return JSON.stringify({'nodes': nodesData, 'edges': saveEdges});
  };

  public deserialize = (jsonObj) => {
    const thisGraph = this;
    thisGraph.deleteGraph(true);
    const nodesData = jsonObj.nodes.map(node => {
      node.data = new (NodeTypes[node.node_type])();
      node.data.properties = node.properties;
      return node;
    });
    [].push.apply(thisGraph.nodes, nodesData);
    thisGraph.setIdCounterByNodes();
    const newEdges = jsonObj.edges;
    newEdges.forEach(function(e, i){
      newEdges[i] = {source: thisGraph.nodes.filter(function(n){return n.id === e.source; })[0],
        target: thisGraph.nodes.filter(function(n){return n.id === e.target; })[0]};
    });

    [].push.apply(thisGraph.edges, newEdges);
    thisGraph.updateGraph();
  };

  private dragMove = (d) => {
    this.state.justDragged = true;
    if (this.state.shiftNodeDrag) {
      const gMousePos = d3.mouse(this.svgG.node());
      this.connectorLine.attr('d', 'M' + d.x + ',' + d.y + 'L' + gMousePos[0] + ',' + gMousePos[1]);
    } else {
      d.x += d3.event.dx;
      d.y +=  d3.event.dy;
      this.updateGraph();
    }
  };
  private dragEnd = (d) => {
    const thisGraph = this;
    if (thisGraph.state.shiftNodeDrag) {
      if (thisGraph.connectTarget && (thisGraph.connectTarget !== d)) {
        const newEdge = {source: d, target: thisGraph.connectTarget};
        thisGraph.edges.push(newEdge);
        thisGraph.updateGraph();
        thisGraph.appService.refreshRxObjects();
      }
      thisGraph.state.shiftNodeDrag = false;
      thisGraph.connectorLine.classed('hidden', true);
    } else {
      this.showResults(null);
    }
  };

  private deleteGraph = (skipPrompt) => {
    const thisGraph = this;
    let doDelete = true;
    if (!skipPrompt) {
      doDelete = window.confirm('Press OK to delete this graph');
    }
    if (doDelete) {
      while (thisGraph.nodes.length) { thisGraph.nodes.pop(); }
      while (thisGraph.edges.length) { thisGraph.edges.pop(); }
      thisGraph.updateGraph();
    }
  };
  public removeSelected = () => {
    const thisGraph = this;
    const state = thisGraph.state;
    const selectedNode = state.selectedNode;
    const selectedEdge = state.selectedEdge;

    thisGraph.appService.setSelectedItem(null);
    if (selectedNode) {
      thisGraph.nodes.splice(thisGraph.nodes.indexOf(selectedNode), 1);
      thisGraph.spliceLinksForNode(selectedNode);
      state.selectedNode = null;
      thisGraph.updateGraph();
    } else if (selectedEdge) {
      thisGraph.edges.splice(thisGraph.edges.indexOf(selectedEdge), 1);
      state.selectedEdge = null;
      thisGraph.updateGraph();
    }
  };
  private spliceLinksForNode = (node) => {
    const thisGraph = this,
      toSplice = thisGraph.edges.filter(function(l) {
        return (l.source === node || l.target === node);
      });
    toSplice.map(function(l) {
      thisGraph.edges.splice(thisGraph.edges.indexOf(l), 1);
    });
  };

  private selectAnEdge = (d3Path, edgeData) => {
    const thisGraph = this;
    d3Path.classed(thisGraph.consts.selectedClass, true);
    if (thisGraph.state.selectedEdge) {
      thisGraph.deselectEdges();
    }
    thisGraph.state.selectedEdge = edgeData;
  };
  private selectANode = (d3Node, nodeData) => {
    const thisGraph = this;
    d3Node.classed(this.consts.selectedClass, true);
    if (thisGraph.state.selectedNode) {
      thisGraph.deselectNodes();
    }
    thisGraph.state.selectedNode = nodeData;
  };
  private deselectNodes = () => {
    const thisGraph = this;
    thisGraph.circles.selectAll('g').filter(function(cd){
      return cd.id === thisGraph.state.selectedNode.id;
    }).classed(thisGraph.consts.selectedClass, false);
    thisGraph.state.selectedNode = null;
  };
  private deselectEdges = () => {
    const thisGraph = this;
    thisGraph.paths.selectAll('path').filter(function(cd){
      return cd === thisGraph.state.selectedEdge;
    }).classed(thisGraph.consts.selectedClass, false);
    thisGraph.state.selectedEdge = null;
  };

  private pathMouseDown = (d3path, d) => {
    const thisGraph = this,
      state = thisGraph.state;
    // d3.event.stopPropagation();
    state.mouseDownLink = d;

    if (state.selectedNode) {
      thisGraph.deselectNodes();
    }

    const prevEdge = state.selectedEdge;
    if (!prevEdge || prevEdge !== d) {
      thisGraph.selectAnEdge(d3path, d);
      this.appService.setSelectedItem(d);
    } else {
      thisGraph.deselectEdges();
      this.appService.setSelectedItem(null);
    }
  };
  private isMouseOnCircleCorner = (d3node) => {
    const mousePos = d3.mouse(d3node.node());
    const r = Math.sqrt(mousePos[0] * mousePos[0] + mousePos[1] * mousePos[1]);
    return (r > (this.consts.nodeRadius / 1.618));
  };
  private circleMouseDown = (d3node, d) => {
    const thisGraph = this,
      state = thisGraph.state;
    // d3.event.stopPropagation();
    state.mouseDownNode = d;
    state.shiftNodeDrag = false;
    if (this.isMouseOnCircleCorner(d3node)) {
      state.shiftNodeDrag = true;
      thisGraph.connectorLine.classed('hidden', false)
        .attr('d', 'M' + d.x + ',' + d.y + 'L' + d.x + ',' + d.y);
      return;
    }
  };

  private circleClick = (d3node, d) => {
    const thisGraph = this,
      state = thisGraph.state,
      consts = thisGraph.consts;
    if (state.selectedEdge) {
      thisGraph.deselectEdges();
    }
    const prevNode = state.selectedNode;

    if (!prevNode || prevNode.id !== d.id) {
      thisGraph.selectANode(d3node, d);
      this.appService.setSelectedItem(d);
    } else {
      thisGraph.deselectNodes();
      this.appService.setSelectedItem(null);
    }
    state.mouseDownNode = null;
    d3.event.preventDefault();
    d3.event.stopPropagation();
    return false;
  };
  private svgClick = () => {
    const nodeClass = this.appService.getCreationOption();
    if (nodeClass) {
      const creationElement = new (nodeClass)();
      const xycoords = d3.mouse(this.svgG.node()),
        d = {
          id: this.idct++,
          data: creationElement,
          x: xycoords[0], y: xycoords[1]
        };
      this.nodes.push(d);
      this.updateGraph();
      this.appService.refreshRxObjects();
      this.appService.setCreationOption(null);
    }
  };

// call to propagate changes to graph
  public updateGraph = () => {

    const thisGraph = this,
      consts = thisGraph.consts,
      state = thisGraph.state;

    const paths = thisGraph.paths.selectAll('path').data(thisGraph.edges, function(d){
      return String(d.source.id) + '+' + String(d.target.id);
    });
    // update existing paths
    paths.style('marker-end', 'url(#end-arrow)')
      .classed(consts.selectedClass, function(d){
        return d === state.selectedEdge;
      })
      .attr('d', function(d){
        return 'M' + d.source.x + ',' + d.source.y + 'L' + d.target.x + ',' + d.target.y;
      });

    // add new paths
    paths.enter()
      .append('path')
      .style('marker-end', 'url(#end-arrow)')
      .classed('link', true)
      .attr('d', (d) => {
        return 'M' + d.source.x + ',' + d.source.y + 'L' + d.target.x + ',' + d.target.y;
      })
      .on('mousedown', function(d){thisGraph.pathMouseDown(d3.select(this), d)})
      .on('mouseup', (d) => { state.mouseDownLink = null; });

    // remove old links
    paths.exit().remove();

    // update existing nodes
    const circles = thisGraph.circles.selectAll('g').data(thisGraph.nodes, d => d.id);
    circles.attr('transform', function(d){
      return 'translate(' + d.x + ',' + d.y + ')';
    });

    // add new nodes
    const newGs = circles.enter()
      .append('g');

    newGs.classed(consts.circleGClass, true)
      .attr('transform', function(d){
        return 'translate(' + d.x + ',' + d.y + ')';
      })
      .on('mouseover', function(d) {
        if (state.shiftNodeDrag) {
          if (!thisGraph.connectTarget) {
            thisGraph.connectTarget = d;
            d3.select(this).classed(consts.connectClass, true);
          }
        }
      })
      .on('mouseout', function(d) {
        if (thisGraph.connectTarget === d) {
          thisGraph.connectTarget = undefined;
          d3.select(this).classed(consts.connectClass, false);
        }
      })
      .on('mousedown', function(d){ thisGraph.circleMouseDown(d3.select(this), d); } )
      .on('click', function(d){ thisGraph.circleClick(d3.select(this), d); })
      .call(thisGraph.drag);

    newGs.append('circle')
      .attr('class', 'outerCircle')
      .attr('r', String(consts.nodeRadius))
      .append('title').text('drag ')

    newGs.append('circle')
      .attr('class', 'innerCircle')
      .attr('r', String(consts.nodeRadius / 1.618));

    newGs.each(function(d) {
      GraphCreator.insertTitleLinebreaks(d3.select(this), d.data.title);
    });

    // remove old nodes
    circles.exit().remove();
  };

  private showResults = (resultList) => {
    // {node, data}
    // update existing nodes
    resultList = resultList || this.lastResultList;
    if (!resultList) {
      return;
    }
    this.lastResultList = resultList;
    const thisGraph = this;
    const resultCircle = thisGraph.resultCircles.selectAll('g').data(resultList, d => d.data.id);
    const cornerDistance = thisGraph.consts.nodeRadius + thisGraph.consts.nodeRadius / 1.618;
    const getTranslate = (d, isStart) => {
      const distance = isStart ? thisGraph.consts.nodeRadius : cornerDistance;
      let x = d.node.x;
      x += distance * Math.sin(d.data.id / 5);
      let y = d.node.y;
      y += distance * Math.cos(d.data.id / 5);
      return 'translate(' + x + ',' + y + ')';
    };
    resultCircle
      .transition()
      .duration(GraphCreator.animateTime / 2)
      .attr('transform', d => getTranslate(d, false))
      .attr('opacity', 0.6)
      .select('text').text(d => d.data.x);

    resultCircle.exit().remove();

    const newGs = resultCircle.enter()
      .append('g');
    newGs
      .attr('opacity', 1)
      .attr('transform', d => getTranslate(d, true))
      .transition()
      .duration(GraphCreator.animateTime / 2)
      .attr('transform', d => getTranslate(d, false))
      .attr('opacity', 0.6);
    const circle = newGs
      .append('circle')
      .attr('r', String(this.consts.nodeRadius / 2.618));
    newGs.each(function (d) {
      GraphCreator.insertTitleLinebreaks(d3.select(this), d.data.x);
    });
  };

  public updateWindow(width, height) {
    this.svg.attr('width', width).attr('height', height);
  };
}
