import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {GraphCreator} from './scene/graph-creator';
import {Operator} from './operator';
import {DiagramNode} from './scene/diagram-node';
import resultAnimator from './scene/result-animator';
import {DiagramEdge} from './scene/diagram-edge';

@Injectable()
export class AppService {
  private selectedCreationOption: any;
  private selectItemSubject: Subject<Operator>;
  private controlSubject: Subject<string>;

  private nodesList: Array<DiagramNode> = [];
  private edgeList: Array<DiagramEdge> = [];

  public removeItemSubject;

  constructor() {
    this.selectItemSubject = new Subject();
    this.removeItemSubject = new Subject();
    this.controlSubject = new Subject();
  }

  public setCreationOption(selectedCreation) {
    this.selectedCreationOption = selectedCreation;
  }

  public getCreationOption() {
    return this.selectedCreationOption;
  }

  public removeSelectedItem() {
    this.removeItemSubject.next();
  }

  /**
   * setSelectedItem reactive change selected item
   * @param selectedItem : any its an edge or node
   */
  public setSelectedItem(selectedItem) {
    this.selectItemSubject.next(selectedItem);
  }

  public getSelectedItem() {
    return this.selectItemSubject;
  }

  public controlScene(command) {
    this.controlSubject.next(command);
  }

  public getControlChanges() {
    return this.controlSubject;
  }

  public getData() {
    return {edges: this.edgeList, nodes: this.nodesList};
  }
  public getDefaultSampleData() {
    const xLoc = window.innerWidth / (window.innerWidth < 600 ? 2 : 3);
    const yLoc = 100;
    const nodes = [
      {id: 0, x: xLoc, y: yLoc, node_type: 'Create', properties: {list: [{time: 0, value: 1}]}},
      {id: 1, x: xLoc, y: yLoc + 200, node_type: 'Subscribe', properties: {}}
    ];
    const edges = [{source: 0, target: 1}];
    return {edges, nodes};
  }

  public get delay(): number {
    return GraphCreator.animateTime;
  }
  public set delay(value) {
    GraphCreator.animateTime = value;
    this.refreshRxObjects();
  }


  public refreshRxObjects() {
    const nodes = this.nodesList;
    const edges = this.edgeList;

    // DISPOSE created rx objects
    for (const node of nodes) {
      node.data.dispose();
    }

    resultAnimator.reset();
    resultAnimator.start(this.delay);

    let levelcounter = 1;
    // Make Creator Observables
    for (const node of nodes) {
      if (!node.data.rx && node.data.maxInput === 0) {
        node.data.run(node, levelcounter);
      }
    }

    // Connect Nodes By Edges
    let notFinished = true;
    while (notFinished) {
      levelcounter++;
      notFinished = false;
      const nodesNeedsRx = nodes.filter(n => !n.data.rx);
      for (const eachNode of nodesNeedsRx) {
        const nodeInputs = edges.filter(e => e.target === eachNode).map(e => e.source);
        eachNode.data.graphInputs = [];
        if (eachNode.data.areInputsReady(nodeInputs)) {
          eachNode.data.graphInputs = nodeInputs.map(node => ({observable: node.data.rx , node: node}));
          eachNode.data.run(eachNode, levelcounter);
          notFinished = true;
          break;
        }
      }
    }
  }
}
