import {Component, OnInit, ElementRef, Renderer} from '@angular/core';
declare var d3: any;

@Component({
  selector: 'rxstudio-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
    const el:HTMLElement = this.el.nativeElement;

    // initial node data
    const width=el.clientWidth;
    const height=el.clientHeight;
    const xLoc = width/2 - 25;
    const yLoc = 100;
    const nodes = [{title: "new concept", id: 0, x: xLoc, y: yLoc},
      {title: "new concept", id: 1, x: xLoc, y: yLoc + 200}];
    const edges = [{source: nodes[1], target: nodes[0]}];


    /** MAIN SVG **/
    const root = d3.select(el);
    const svg = root.append('svg')
      .attr("width", width)
      .attr("height", height);
    const graph = new GraphCreator(svg, nodes, edges);
    graph.setIdCt(2);
    graph.updateGraph();
  }
}

// define graphcreator object
class GraphCreator {
  consts =  {
    selectedClass: "selected",
    connectClass: "connect-node",
    circleGClass: "conceptG",
    graphClass: "graph",
    activeEditId: "active-editing",
    BACKSPACE_KEY: 8,
    DELETE_KEY: 46,
    ENTER_KEY: 13,
    nodeRadius: 50
  };
  state = {
    selectedNode: null,
    selectedEdge: null,
    mouseDownNode: null,
    mouseDownLink: null,
    justDragged: false,
    justScaleTransGraph: false,
    lastKeyDown: -1,
    shiftNodeDrag: false,
    selectedText: null,
    graphMouseDown:false,
  };

  nodes = [];
  edges = [];
  dragLine;
  svg;svgG;circles;paths;drag;
  constructor(svg, nodes, edges) {
    const thisGraph = this;
    this.nodes = nodes || [];
    this.edges = edges || [];
    this.svg = svg;
    this.svgG = svg.append("g").classed(thisGraph.consts.graphClass, true);
    this.defineArrows();
    this.bindEvents();
  }

  defineArrows() {
    // define arrow markers for graph links
    const defs = this.svg.append('svg:defs');
    defs.append('svg:marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', "32")
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
    this.dragLine = this.svgG.append('svg:path')
      .attr('class', 'link dragline hidden')
      .attr('d', 'M0,0L0,0')
      .style('marker-end', 'url(#mark-end-arrow)');
  }
  bindEvents() {
    const thisGraph = this;
    // svg nodes and edges
    thisGraph.paths = this.svgG.append("g").selectAll("g");
    thisGraph.circles = this.svgG.append("g").selectAll("g");

    thisGraph.drag = d3.drag()
      //to set group origin drag [position
      .subject(function(d){
        return {x: d.x, y: d.y};
      })
      // on start draging
      // .on("start", function(args){
      //   thisGraph.state.justDragged = true;
      //   thisGraph.dragmove.call(thisGraph, args);
      // })
      .on("drag", function(args){
        thisGraph.state.justDragged = true;
        thisGraph.dragmove.call(thisGraph, args);
      })
      .on("end", function() {
        // todo check if edge-mode is selected
      });

    // listen for key events
    d3.select(window).on("keydown", function(){
      thisGraph.svgKeyDown.call(thisGraph);
    })
      .on("keyup", function(){
        thisGraph.svgKeyUp.call(thisGraph);
      });
    this.svg.on("mousedown", function(d){thisGraph.svgMouseDown.call(thisGraph, d);});
    this.svg.on("mouseup", function(d){thisGraph.svgMouseUp.call(thisGraph, d);});

    // listen for dragging
    const dragSvg = d3.zoom()
      .on("start", function(){
        const ael = d3.select("#" + thisGraph.consts.activeEditId).node();
        if (ael){
          ael.blur();
        }
        if (!d3.event.sourceEvent.shiftKey) d3.select('body').style("cursor", "move");
      })
      .on("zoom", function(){
        if (d3.event.sourceEvent.shiftKey){
          // TODO  the internal d3 state is still changing
          return false;
        } else{
          thisGraph.zoomed.call(thisGraph);
        }
        return true;
      })
      .on("end", function(){
        d3.select('body').style("cursor", "auto");
      });

    this.svg.call(dragSvg).on("dblclick.zoom", null);

    // listen for resize
    window.onresize = function(){thisGraph.updateWindow(thisGraph.svg);};

    // handle delete graph
    d3.select("#delete-graph").on("click", function(){
      thisGraph.deleteGraph(false);
    });
  }

  idct = 0;
  setIdCt(idct){
    this.idct = idct;
  };
  serialize() {
    const thisGraph = this;
    const saveEdges = [];
    thisGraph.edges.forEach(function (val, i) {
      saveEdges.push({source: val.source.id, target: val.target.id});
    });
    return JSON.stringify({"nodes": thisGraph.nodes, "edges": saveEdges});
  }
  deserialize(jsonText){
    const thisGraph = this;
    const jsonObj = JSON.parse(jsonText);
    thisGraph.deleteGraph(true);
    thisGraph.nodes = jsonObj.nodes;
    thisGraph.setIdCt(jsonObj.nodes.length + 1);
    const newEdges = jsonObj.edges;
    newEdges.forEach(function(e, i){
      newEdges[i] = {source: thisGraph.nodes.filter(function(n){return n.id == e.source;})[0],
        target: thisGraph.nodes.filter(function(n){return n.id == e.target;})[0]};
    });
    thisGraph.edges = newEdges;
    thisGraph.updateGraph();
  }

  dragmove(d) {
    const thisGraph = this;
    if (thisGraph.state.shiftNodeDrag){
      thisGraph.dragLine.attr('d', 'M' + d.x + ',' + d.y + 'L' + d3.mouse(thisGraph.svgG.node())[0] + ',' + d3.mouse(this.svgG.node())[1]);
    } else{
      d.x += d3.event.dx;
      d.y +=  d3.event.dy;
      thisGraph.updateGraph();
    }
  }

  deleteGraph(skipPrompt){
    const thisGraph = this;
    let doDelete = true;
    if (!skipPrompt){
      doDelete = window.confirm("Press OK to delete this graph");
    }
    if(doDelete){
      thisGraph.nodes = [];
      thisGraph.edges = [];
      thisGraph.updateGraph();
    }
  };

  /* select all text in element: taken from http://stackoverflow.com/questions/6139107/programatically-select-text-in-a-contenteditable-html-element */
  selectElementContents(el) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };


  /* insert svg line breaks: taken from http://stackoverflow.com/questions/13241475/how-do-i-include-newlines-in-labels-in-d3-charts */
  insertTitleLinebreaks (gEl, title) {
    const words = title.split(/\s+/g),
      nwords = words.length;
    const el = gEl.append("text")
      .attr("text-anchor","middle")
      .attr("dy", "-" + (nwords-1)*7.5);

    for (let i = 0; i < words.length; i++) {
      const tspan = el.append('tspan').text(words[i]);
      if (i > 0)
        tspan.attr('x', 0).attr('dy', '15');
    }
  };


// remove edges associated with a node
  spliceLinksForNode(node) {
    const thisGraph = this,
      toSplice = thisGraph.edges.filter(function(l) {
        return (l.source === node || l.target === node);
      });
    toSplice.map(function(l) {
      thisGraph.edges.splice(thisGraph.edges.indexOf(l), 1);
    });
  };

  replaceSelectEdge(d3Path, edgeData){
    const thisGraph = this;
    d3Path.classed(thisGraph.consts.selectedClass, true);
    if (thisGraph.state.selectedEdge){
      thisGraph.removeSelectFromEdge();
    }
    thisGraph.state.selectedEdge = edgeData;
  };

  replaceSelectNode(d3Node, nodeData){
    const thisGraph = this;
    d3Node.classed(this.consts.selectedClass, true);
    if (thisGraph.state.selectedNode){
      thisGraph.removeSelectFromNode();
    }
    thisGraph.state.selectedNode = nodeData;
  };

  removeSelectFromNode(){
    const thisGraph = this;
    thisGraph.circles.filter(function(cd){
      return cd.id === thisGraph.state.selectedNode.id;
    }).classed(thisGraph.consts.selectedClass, false);
    thisGraph.state.selectedNode = null;
  };

  removeSelectFromEdge(){
    const thisGraph = this;
    thisGraph.paths.filter(function(cd){
      return cd === thisGraph.state.selectedEdge;
    }).classed(thisGraph.consts.selectedClass, false);
    thisGraph.state.selectedEdge = null;
  };

  pathMouseDown (d3path, d){
    const thisGraph = this,
      state = thisGraph.state;
    d3.event.stopPropagation();
    state.mouseDownLink = d;

    if (state.selectedNode){
      thisGraph.removeSelectFromNode();
    }

    const prevEdge = state.selectedEdge;
    if (!prevEdge || prevEdge !== d){
      thisGraph.replaceSelectEdge(d3path, d);
    } else{
      thisGraph.removeSelectFromEdge();
    }
  };

// mousedown on node
  circleMouseDown (d3node, d){
    const thisGraph = this,
      state = thisGraph.state;
    d3.event.stopPropagation();
    state.mouseDownNode = d;
    if (d3.event.shiftKey){
      state.shiftNodeDrag = d3.event.shiftKey;
      // reposition dragged directed edge
      thisGraph.dragLine.classed('hidden', false)
        .attr('d', 'M' + d.x + ',' + d.y + 'L' + d.x + ',' + d.y);
      return;
    }
  };

  /* place editable text on node in place of svg text */
  // changeTextOfNode (d3node, d){
  //   const thisGraph= this,
  //     consts = thisGraph.consts,
  //     htmlEl = d3node.node();
  //   d3node.selectAll("text").remove();
  //   const nodeBCR = htmlEl.getBoundingClientRect(),
  //     curScale = nodeBCR.width/consts.nodeRadius,
  //     placePad  =  5*curScale,
  //     useHW = curScale > 1 ? nodeBCR.width*0.71 : consts.nodeRadius*1.42;
  //   // replace with editableconent text
  //   const d3txt = thisGraph.svg.selectAll("foreignObject")
  //     .data([d])
  //     .enter()
  //     .append("foreignObject")
  //     .attr("x", nodeBCR.left + placePad )
  //     .attr("y", nodeBCR.top + placePad)
  //     .attr("height", 2*useHW)
  //     .attr("width", useHW)
  //     .append("xhtml:p")
  //     .attr("id", consts.activeEditId)
  //     .attr("contentEditable", "true")
  //     .text(d.title)
  //     .on("mousedown", function(d){
  //       d3.event.stopPropagation();
  //     })
  //     .on("keydown", function(d){
  //       d3.event.stopPropagation();
  //       if (d3.event.keyCode == consts.ENTER_KEY && !d3.event.shiftKey){
  //         this.blur();
  //       }
  //     })
  //     .on("blur", function(d){
  //       d.title = this.textContent;
  //       thisGraph.insertTitleLinebreaks(d3node, d.title);
  //       d3.select(this.parentElement).remove();
  //     });
  //   return d3txt;
  // };

// mouseup on nodes
  circleMouseUp(d3node, d){
    const thisGraph = this,
      state = thisGraph.state,
      consts = thisGraph.consts;
    // reset the states
    state.shiftNodeDrag = false;
    d3node.classed(consts.connectClass, false);

    const mouseDownNode = state.mouseDownNode;

    if (!mouseDownNode) return;

    thisGraph.dragLine.classed("hidden", true);

    if (mouseDownNode !== d){
      // we're in a different node: create new edge for mousedown edge and add to graph
      const newEdge = {source: mouseDownNode, target: d};
      const filtRes = thisGraph.paths.filter(function(d){
        if (d.source === newEdge.target && d.target === newEdge.source){
          thisGraph.edges.splice(thisGraph.edges.indexOf(d), 1);
        }
        return d.source === newEdge.source && d.target === newEdge.target;
      });
      if (!filtRes[0].length){
        thisGraph.edges.push(newEdge);
        thisGraph.updateGraph();
      }
    } else{
      // we're in the same node
      if (state.justDragged) {
        // dragged, not clicked
        state.justDragged = false;
      } else{
        // clicked, not dragged
        if (d3.event.shiftKey){
          // shift-clicked node: edit text content
          // const d3txt = thisGraph.changeTextOfNode(d3node, d);
          // const txtNode = d3txt.node();
          // thisGraph.selectElementContents(txtNode);
          // txtNode.focus();
        } else{
          if (state.selectedEdge){
            thisGraph.removeSelectFromEdge();
          }
          const prevNode = state.selectedNode;

          if (!prevNode || prevNode.id !== d.id){
            thisGraph.replaceSelectNode(d3node, d);
          } else{
            thisGraph.removeSelectFromNode();
          }
        }
      }
    }
    state.mouseDownNode = null;
    return;

  }; // end of circles mouseup

// mousedown on main svg
  svgMouseDown(){
    this.state.graphMouseDown = true;
  };

// mouseup on main svg
  svgMouseUp(){
    const thisGraph = this,
      state = thisGraph.state;
    if (state.justScaleTransGraph) {
      // dragged not clicked
      state.justScaleTransGraph = false;
    }
    else if (state.graphMouseDown && d3.event.shiftKey){
      // clicked not dragged from svg
      const xycoords = d3.mouse(thisGraph.svgG.node()),
        d = {id: thisGraph.idct++, title: "new concept", x: xycoords[0], y: xycoords[1]};
      thisGraph.nodes.push(d);
      thisGraph.updateGraph();

      // make title of text immediently editable
      // const d3txt = thisGraph.changeTextOfNode(thisGraph.circles.filter(function(dval){
      //     return dval.id === d.id;
      //   }), d),
      //   txtNode = d3txt.node();
      // thisGraph.selectElementContents(txtNode);
      // txtNode.focus();
    }
    else if (state.shiftNodeDrag){
      // dragged from node
      state.shiftNodeDrag = false;
      thisGraph.dragLine.classed("hidden", true);
    }
    state.graphMouseDown = false;
  };

// keydown on main svg
  svgKeyDown() {
    const thisGraph = this,
      state = thisGraph.state,
      consts = thisGraph.consts;
    // make sure repeated key presses don't register for each keydown
    if(state.lastKeyDown !== -1) return;

    state.lastKeyDown = d3.event.keyCode;
    const selectedNode = state.selectedNode,
      selectedEdge = state.selectedEdge;

    switch(d3.event.keyCode) {
      case consts.BACKSPACE_KEY:
      case consts.DELETE_KEY:
        d3.event.preventDefault();
        if (selectedNode){
          thisGraph.nodes.splice(thisGraph.nodes.indexOf(selectedNode), 1);
          thisGraph.spliceLinksForNode(selectedNode);
          state.selectedNode = null;
          thisGraph.updateGraph();
        } else if (selectedEdge){
          thisGraph.edges.splice(thisGraph.edges.indexOf(selectedEdge), 1);
          state.selectedEdge = null;
          thisGraph.updateGraph();
        }
        break;
    }
  };

  svgKeyUp() {
    this.state.lastKeyDown = -1;
  };

// call to propagate changes to graph
  updateGraph(){

    const thisGraph = this,
      consts = thisGraph.consts,
      state = thisGraph.state;

    thisGraph.paths = thisGraph.svgG.select("g").selectAll("path").data(thisGraph.edges, function(d){
      return String(d.source.id) + "+" + String(d.target.id);
    });
    const paths = thisGraph.paths;
    // update existing paths
    paths.style('marker-end', 'url(#end-arrow)')
      .classed(consts.selectedClass, function(d){
        return d === state.selectedEdge;
      })
      .attr("d", function(d){
        return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
      });

    // add new paths
    paths.enter()
      .append("path")
      .style('marker-end','url(#end-arrow)')
      .classed("link", true)
      .attr("d", function(d){
        return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
      })
      .on("mousedown", function(d){
          thisGraph.pathMouseDown.call(thisGraph, d3.select(this), d);
        }
      )
      .on("mouseup", function(d){
        state.mouseDownLink = null;
      });

    // remove old links
    paths.exit().remove();

    // update existing nodes
    thisGraph.circles = thisGraph.svgG.select("g").selectAll("g").data(thisGraph.nodes, function(d){
      return d.id;
    });
    thisGraph.circles.attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    });

    // add new nodes
    const newGs= thisGraph.circles.enter()
      .append("g");

    newGs.classed(consts.circleGClass, true)
      .attr("transform", function(d){
        return "translate(" + d.x + "," + d.y + ")";
      })
      .on("mouseover", function(d){
        if (state.shiftNodeDrag){
          d3.select(this).classed(consts.connectClass, true);
        }
      })
      .on("mouseout", function(d){
        d3.select(this).classed(consts.connectClass, false);
      })
      .on("mousedown", function(d){
        thisGraph.circleMouseDown.call(thisGraph, d3.select(this), d);
      })
      .on("mouseup", function(d){
        thisGraph.circleMouseUp.call(thisGraph, d3.select(this), d);
      })
      .call(thisGraph.drag);

    newGs.append("circle")
      .attr("r", String(consts.nodeRadius));

    newGs.each(function(d){
      thisGraph.insertTitleLinebreaks(d3.select(this), d.title);
    });

    // remove old nodes
    thisGraph.circles.exit().remove();
  };

  zoomed(){
    this.state.justScaleTransGraph = true;
    d3.select("." + this.consts.graphClass)
      .attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
  };

  updateWindow(svg){
    const docEl = document.documentElement,
      bodyEl = document.getElementsByTagName('body')[0];
    const x = window.innerWidth || docEl.clientWidth || bodyEl.clientWidth;
    const y = window.innerHeight|| docEl.clientHeight|| bodyEl.clientHeight;
    svg.attr("width", x).attr("height", y);
  };

}
