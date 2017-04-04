import { Injectable } from '@angular/core';
import {Subject,Observable} from "rxjs";
import * as NodeTypes from "./node-types";

@Injectable()
export class AppService {
  private selectedCreationOption;
  private selectItemSubject;
  private controlSubject;
  private rxOperators;

  constructor() {
    this.selectItemSubject = new Subject();
    this.controlSubject = new Subject();
    this.rxOperators = [
      {
        name: "Creating Observables",
        desc: "Operators that originate new Observables.",
        list: [
          NodeTypes.Create,
          NodeTypes.Defer
        ]
      },
      {
        name: "Transforming Observables",
        desc: "Operators that transform items that are emitted by an Observable.",
        list: [
          NodeTypes.BufferWithCount,
          NodeTypes.FlatMap  //TODO: make its properties
        ]
      },
      {
        name: "Filtering Observables",
        desc: "Operators that selectively emit items from a source Observable.",
        list: [
          NodeTypes.Debounce,
          NodeTypes.Distinct,
        ]
      },
      {
        name: "Combining Observables",
        desc: "Operators that work with multiple source Observables to create a single Observable",
        list: [
          NodeTypes.Join,
          NodeTypes.Merge,
        ]
      },
      {
        name: "Error Handling Operators",
        desc: "Operators that help to recover from error notifications from an Observable",
        list: [
          NodeTypes.Catch,
          NodeTypes.Retry
        ]
      },
      {
        name: "Observable Utility Operators",
        desc: "A toolbox of useful Operators for working with Observables",
        list: [
          NodeTypes.Subscribe,
          NodeTypes.Delay,
        ]
      },
      {
        name: "Conditional and Boolean Operators",
        desc: "Operators that evaluate one or more Observables or items emitted by Observables",
        list: [
          NodeTypes.All,//TODO : property fixing
          NodeTypes.TakeWhile
        ]
      },
      {
        name: "Mathematical and Aggregate Operators",
        desc: "Operators that operate on the entire sequence of items emitted by an Observable",
        list: [
          NodeTypes.Average
        ]
      },
      {
        name: "Backpressure Operators",
        desc: "strategies for coping with Observables that produce items more rapidly than their observers consume them",
        list: [
          NodeTypes.Windowed //TODO: property
        ]
      },
      {
        name: "Connectable Observable Operators",
        desc: "Specialty Observables that have more precisely-controlled subscription dynamics",
        list: [
          NodeTypes.Publish,
          NodeTypes.RefCount,
        ]
      }
    ];
  }

  public getOperators() {
    return this.rxOperators;
  }

  public setCreationOption(selectedCreation) {
    this.selectedCreationOption = selectedCreation;
  }

  public getCreationOption() {
    return this.selectedCreationOption
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

  public getInitialData(width, height) {
    const createOperator = this.rxOperators.map(optype => optype.list.filter(op => op.name == 'Create')[0]).filter(op => op)[0];
    const subscribeOperator = this.rxOperators.map(optype => optype.list.filter(op => op.name == 'Subscribe')[0]).filter(op => op)[0];
    const xLoc = width / 2 - 25;
    const yLoc = 100;
    const nodes = [
      {id: 0, x: xLoc, y: yLoc, data: createOperator},
      {id: 1, x: xLoc, y: yLoc + 200, data: subscribeOperator}
    ];
    const edges = [{source: nodes[0], target: nodes[1]}];
    return {edges, nodes};
  }

  public rebuildRxObjects(nodes, edges) {
    for (let node of nodes) {
      if (node.data.rx) {
        node.data.rx.dispose();
        node.data.rx = 0;
      }
    }

    //make root observables
    for (let node of nodes) {
      if (!node.data.rx && node.data.maxInput < 1) {
        node.data.rx = node.data.runner(node.data.properties);
      }
    }

    let notFinished = true;
    while (notFinished) {
      notFinished = false;
      for (let edge of edges) {
        if (edge.source.rx) {
          edge.target.data.rx = edge.target.data.runner(edge.target.data.properties);
          notFinished = true;
        }
      }
    }
  }
}
