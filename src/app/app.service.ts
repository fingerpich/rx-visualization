import { Injectable } from '@angular/core';
import {Subject,Observable} from "rxjs";
import * as NodeTypes from "./node-types";
import {RxHelper} from "./rx-helper"
@Injectable()
export class AppService {
  private selectedCreationOption;
  private selectItemSubject;
  private controlSubject;
  private itemSubscriptor;

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
    if (this.selectedCreationOption) return new (this.selectedCreationOption)();
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

  private resultsArray = [];

  public subscribeItem(node, data) {
    let index = this.resultsArray.findIndex(d=>(d.data.id == data.id));
    if (index > -1) {
      let lastData = this.resultsArray[index];
      this.resultsArray[index] = {node, data, lastData: lastData.data, lastNode: lastData.node};
    }
    else {
      this.resultsArray.push({node, data});
    }
    this.itemSubscriptor.next(this.resultsArray);
  }

  private nodesList;
  private edgeList;

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

  public get delay():number {
    return this.delayBetweenEmittedItem;
  }
  public set delay(value) {
    this.delayBetweenEmittedItem = value;
    this.refreshRxObjects();
  }

  private cntr = 1;
  private delayBetweenEmittedItem = 200;

  public refreshRxObjects() {
    const nodes = this.nodesList;
    const edges = this.edgeList;
    this.resultsArray = [];

    const getEmittedItemAsObject = x => {
      if (x.id) return x;
      else {
        return {x: x, id: this.cntr++};
      }
    };


    const makeGapBetweenEmittedItems = (ob)=> {
      return Observable.zip(
        ob.flatMap(function (x) {
          return Observable.of(getEmittedItemAsObject(x));
        }),
        Observable.interval(this.delayBetweenEmittedItem),
        c=>c
      );
    };

    //Show what has been subscribed
    const nodeSubscriptor = (node) => {
      if (node.data.rx) {
        node.data.rxo = node.data.rx.subscribe((data)=> {
          this.subscribeItem(node, data);
        })
      }
    };

    //DISPOSE existed rx objects
    for (let node of nodes) {
      if (node.data.rxo) {
        node.data.rxo.unsubscribe && node.data.rxo.unsubscribe();
        node.data.rx = 0;
        node.data.rxo = 0;
      }
    }

    //Make Creator Observables
    for (let node of nodes) {
      if (!node.data.rx && node.data.maxInput == 0) {
        node.data.rx = makeGapBetweenEmittedItems(node.data.runner()).share();
      }
    }

    //Connect Nodes By Edges
    let notFinished = true;
    while (notFinished) {
      notFinished = false;
      const nodesNeedsRx = nodes.filter(n => !n.data.rx);
      for (let eachNode of nodesNeedsRx) {
        let eachNodeSources = edges.filter(e => e.target == eachNode).map(e => e.source);

        let couldInitRx =
          eachNodeSources.length <= eachNode.data.maxInput &&
          eachNodeSources.length >= eachNode.data.minInput &&
          eachNodeSources.every(n => n.data.rx);

        if (couldInitRx) {
          eachNode.data.graphInputs = eachNodeSources.map(node => node.data.rx);
          eachNode.data.rx = makeGapBetweenEmittedItems(eachNode.data.runner()).share();
          notFinished = true;
          break;
        }
      }
    }

    for (let node of nodes) {
      nodeSubscriptor(node);
    }

  }
}
