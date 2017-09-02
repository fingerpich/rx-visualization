import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs/Rx';
import * as NodeTypes from './node-types';
import {GraphCreator} from './scene/graph-creator';

@Injectable()
export class AppService {
  private selectedCreationOption;
  private selectItemSubject;
  private controlSubject;
  private itemSubscriptor;
  private resultsArray = [];
  private resultTimeouts = [];
  private nodesList = [];
  private edgeList = [];

  public removeItemSubject;

  constructor() {
    this.selectItemSubject = new Subject();
    this.removeItemSubject = new Subject();
    this.controlSubject = new Subject();
    this.itemSubscriptor = new Subject();
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

  public getItemSubscribe() {
    return this.itemSubscriptor;
  }

  private distroyTimeouts() {
    let rt = 0;
    while (rt = this.resultTimeouts.pop()) {
      clearTimeout(rt);
    }
  }
  private addNextResult(index, nextResult) {
    const resultsArray = this.resultsArray;
    resultsArray[index].nexts.push(nextResult);
    this.resultTimeouts.push(setTimeout(() => {
      const firstNext = resultsArray[index].nexts.shift();
      resultsArray[index].node = firstNext.node;
      resultsArray[index].data = firstNext.data;

      this.itemSubscriptor.next(resultsArray);
    }, GraphCreator.animateTime * resultsArray[index].nexts.length));
  }
  public subscribeItem = (node, data) => {
    const resultsArray = this.resultsArray;
    const index = resultsArray.findIndex(d => (d.data.id === data.id));
    if (index > -1) {
      this.addNextResult(index, {node, data});
    } else {
      resultsArray.push({node, data, nexts: []});
    }
    this.itemSubscriptor.next(resultsArray);
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
    this.resultsArray = [];

    // DISPOSE created rx objects
    for (const node of nodes) {
      node.data.dispose();
    }
    while (this.resultsArray.pop()) {}
    this.distroyTimeouts();

    let levelcounter = 1;
    // Make Creator Observables
    for (const node of nodes) {
      if (!node.data.rx && node.data.maxInput === 0) {
        node.data.run(node, levelcounter, this.subscribeItem);
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
        if (eachNode.data.areInputsReady(nodeInputs)) {
          eachNode.data.graphInputs = nodeInputs.map(node => { return {observable: node.data.rx , node: node}; } );
          eachNode.data.run(eachNode, levelcounter, this.subscribeItem);
          notFinished = true;
          break;
        }
      }
    }
  }
}
