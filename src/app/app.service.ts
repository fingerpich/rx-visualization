import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import * as NodeTypes from './node-types';
import {RxHelper} from './rx-helper';
@Injectable()
export class AppService {
  private selectedCreationOption;
  private selectItemSubject;
  private controlSubject;
  private itemSubscriptor;
  private cntr = 1;
  private delayBetweenEmittedItem = 200;
  private resultsArray = [];
  private nodesList;
  private edgeList;

  constructor() {
    this.selectItemSubject = new Subject();
    this.controlSubject = new Subject();
    this.itemSubscriptor = new Subject();
  }

  public getOperators() {
    return RxHelper.getRxOperator();
  }

  public setCreationOption(selectedCreation) {
    this.selectedCreationOption = selectedCreation;
  }

  public getCreationOption() {
    if (this.selectedCreationOption) {
      return new (this.selectedCreationOption)();
    }
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

  public subscribeItem(node, data) {
    const index = this.resultsArray.findIndex(d => (d.data.id === data.id));
    if (index > -1) {
      const lastData = this.resultsArray[index];
      this.resultsArray[index] = {node, data, lastData: lastData.data, lastNode: lastData.node};
    } else {
      this.resultsArray.push({node, data});
    }
    this.itemSubscriptor.next(this.resultsArray);
  }

  public getInitialData(width, height) {
    const xLoc = width / 2 - 25;
    const yLoc = 100;
    const nodes = [
      {id: 0, x: xLoc, y: yLoc, data: new NodeTypes.Create()},
      {id: 1, x: xLoc, y: yLoc + 200, data: new NodeTypes.Subscribe()}
    ];
    const edges = [{source: nodes[0], target: nodes[1]}];
    this.nodesList = nodes;
    this.edgeList = edges;
    return {edges, nodes};
  }

  public get delay(): number {
    return this.delayBetweenEmittedItem;
  }
  public set delay(value) {
    this.delayBetweenEmittedItem = value;
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

    let levelcounter = 1;
    // Make Creator Observables
    for (const node of nodes) {
      if (!node.data.rx && node.data.maxInput === 0) {
        node.data.run(node, (n, ob) => { this.subscribeItem(n, ob); });
        node.data.level = levelcounter;
      }
    }

    // Connect Nodes By Edges
    let notFinished = true;
    while (notFinished) {
      levelcounter++;
      notFinished = false;
      const nodesNeedsRx = nodes.filter(n => !n.data.rx);
      for (const eachNode of nodesNeedsRx) {
        const eachNodeSources = edges.filter(e => e.target === eachNode).map(e => e.source);

        const couldInitRx =
          eachNodeSources.length <= eachNode.data.maxInput &&
          eachNodeSources.length >= eachNode.data.minInput &&
          eachNodeSources.every(n => n.data.rx);

        if (couldInitRx) {
          eachNode.data.graphInputs = eachNodeSources.map(node => node.data.rx);
          eachNode.data.run(eachNode, (n, ob) => { this.subscribeItem(n, ob); });
          eachNode.data.level = levelcounter;
          notFinished = true;
          break;
        }
      }
    }
  }
}
