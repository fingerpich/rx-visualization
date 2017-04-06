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
          NodeTypes.Defer,
          //Empty/Never/Throw
          NodeTypes.From,
          NodeTypes.FromEvent,
          NodeTypes.Interval,
          // NodeTypes.Just,
          NodeTypes.Range,
          NodeTypes.Repeat,
          // NodeTypes.Start,
          NodeTypes.Timer
        ]
      },
      {
        name: "Transforming Observables",
        desc: "Operators that transform items that are emitted by an Observable.",
        list: [
          NodeTypes.BufferWithCount,
          NodeTypes.FlatMap,
          NodeTypes.Map,
          NodeTypes.Scan,
          NodeTypes.Pluck,
          NodeTypes.GroupBy,
          NodeTypes.WindowWithCount,
        ]
      },
      {
        name: "Filtering Observables",
        desc: "Operators that selectively emit items from a source Observable.",
        list: [
          NodeTypes.Debounce,
          NodeTypes.Distinct,
          NodeTypes.IgnoreElements,
          NodeTypes.ElementAt,
          NodeTypes.Filter,
          NodeTypes.First,
          NodeTypes.Last,
          NodeTypes.Sample,
          NodeTypes.Skip,
          NodeTypes.SkipLast,
          NodeTypes.Take,
          NodeTypes.TakeLast,
        ]
      },
      {
        name: "Combining Observables",
        desc: "Operators that work with multiple source Observables to create a single Observable",
        list: [
          //And/Then/When
          //CombineLatest
          NodeTypes.Join,
          NodeTypes.Merge,
          NodeTypes.StartWith,
          NodeTypes.Switch,
          NodeTypes.Zip,
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
          NodeTypes.Delay,
          NodeTypes.Do,
          // Materialize/Dematerialize
          // ObserveOn
          // Serialize
          NodeTypes.Subscribe,
          // NodeTypes.SubscribeOn,
          // NodeTypes.TimeInterval,
          NodeTypes.Timeout,
          // NodeTypes.Timestamp,
          // NodeTypes.Using,
        ]
      },
      {
        name: "Conditional and Boolean Operators",
        desc: "Operators that evaluate one or more Observables or items emitted by Observables",
        list: [
          NodeTypes.All,
          NodeTypes.Race,
          NodeTypes.Contains,
          NodeTypes.SequenceEqual,
          NodeTypes.SkipUntil,
          NodeTypes.SkipWhile,
          NodeTypes.TakeUntil,
          NodeTypes.TakeWhile,
        ]
      },
      {
        name: "Mathematical and Aggregate Operators",
        desc: "Operators that operate on the entire sequence of items emitted by an Observable",
        list: [
          NodeTypes.Average,
          // NodeTypes.Concat,
          NodeTypes.Count,
          NodeTypes.Max,
          NodeTypes.Min,
          // NodeTypes.Reduce,
          NodeTypes.Sum,
        ]
      },
      {
        name: "Connectable Observable Operators",
        desc: "Specialty Observables that have more precisely-controlled subscription dynamics",
        list: [
          NodeTypes.Connect,
          NodeTypes.Publish,
          NodeTypes.RefCount,
          NodeTypes.Replay,
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
    return new (this.selectedCreationOption)();
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

  private nodesList;
  private edgeList;
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
    this.nodesList=nodes;
    this.edgeList=edges;
    return {edges, nodes};
  }

  public rebuildRxObjects() {
    const nodes=this.nodesList;
    const edges=this.edgeList;

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
          edge.target.data.rx = edge.target.data.runner();
          notFinished = true;
        }
      }
    }
  }
}
