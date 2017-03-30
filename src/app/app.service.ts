import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class AppService {
  private selectedCreationOption;
  private selectItemSubject;
  private controlSubject;
  private rxOperators;

  constructor() {
    this.selectItemSubject = new Subject();
    this.controlSubject = new Subject();
    const operatorLinks = "http://reactivex.io/documentation/operators/";
    this.rxOperators = [
      {
        name: "Creating Observables",
        desc: "Operators that originate new Observables.",
        list: [
          {
            name: "Create",
            link: operatorLinks + "create.html",
            desc: "create an Observable from scratch by calling observer methods programmatically",
            cmd: "Rx.Observable.create((observer)=>{observer.next(1);observer.next(2);})",
            maxInput: 0
          },
          {
            name: "Defer",
            link: operatorLinks + "defer.html",
            desc: "do not create the Observable until the observer subscribes, and create a fresh Observable for each observer",
            cmd: "Rx.Observable.defer(() => { return Rx.Observable.return(42); })",
            maxInput: 0
          },
        ]
      },
      {
        name: "Transforming Observables",
        desc: "Operators that transform items that are emitted by an Observable.",
        list: [
          {
            name: "Buffer",
            link: operatorLinks + "buffer.html",
            desc: "periodically gather items from an Observable into bundles and emit these bundles rather than emitting the items one at a time",
            cmd: ".bufferWithCount( 3 /* count */)",
            minInput: 1,
            maxInput: 1
          },
          {
            name: "FlatMap",
            link: operatorLinks + "flatmap.html",
            desc: "transform the items emitted by an Observable into Observables, then flatten the emissions from those into a single Observable",
            cmd: ".flatMapLatest(function (x) {return Rx.Observable.range(x, 2);});",
            minInput: 1,
            maxInput: 1
          },
        ]
      },
      {
        name: "Filtering Observables",
        desc: "Operators that selectively emit items from a source Observable.",
        list: [
          {
            name: "Debounce",
            link: operatorLinks + "debounce.html",
            desc: "only emit an item from an Observable if a particular timespan has passed without it emitting another item",
            cmd: `.debounce(500 /* ms */)`,
            minInput: 1,
            maxInput: 1
          },
          {
            name: "Distinct",
            link: operatorLinks + "distinct.html",
            desc: "suppress duplicate items emitted by an Observable",
            cmd: `.distinct()`,
            minInput: 1,
            maxInput: 1
          },
        ]
      },
      {
        name: "Combining Observables",
        desc: "Operators that work with multiple source Observables to create a single Observable",
        list: [
          {
            name: "Join",
            link: operatorLinks + "join.html",
            desc: "combine items emitted by two Observables whenever an item from one Observable is emitted during a time window defined according to an item emitted by the other Observable",
            cmd: `.join(
        @input[1]/* the second observable connected to this block */,
        function () { return Rx.Observable.timer(0); },
        function () { return Rx.Observable.timer(0); },
        function (x, y) { return x + y; }
    )`,
            minInput: 2,
            maxInput: 2
          },
          {
            name: "Merge",
            link: operatorLinks + "merge.html",
            desc: "combine multiple Observables into one by merging their emissions",
            cmd: `Rx.Observable.mergeDelayError(@inputs);`,
            minInput: 2,
            maxInput: 300
          },
        ]
      },
      {
        name: "Error Handling Operators",
        desc: "Operators that help to recover from error notifications from an Observable",
        list: [
          {
            name: "Catch",
            link: operatorLinks + "catch.html",
            desc: " recover from an onError notification by continuing the sequence without error",
            cmd: `.catch((err)=>{return "err:"+err;});`,
            minInput: 1,
            maxInput: 1
          },
          {
            name: "Retry",
            link: operatorLinks + "retry.html",
            desc: "if a source Observable sends an onError notification, resubscribe to it in the hopes that it will complete without error",
            cmd: `.retry(3/* count */);`,
            minInput: 1,
            maxInput: 1
          },
        ]
      },
      {
        name: "Observable Utility Operators",
        desc: "A toolbox of useful Operators for working with Observables",
        list: [
          {
            name: "Subscribe",
            link: operatorLinks + "subscribe.html",
            desc: "operate upon the emissions and notifications from an Observable",
            cmd: `.subscribe(
  function (x) { console.log('Next: %s', x); },/* on next*/
  function (err) { console.log('Error: %s', err); }, /* on error*/
  function () { console.log('Completed');/* on complete*/ 
  });`,
            minInput: 1,
            maxInput: 1
          },
          {
            name: "Delay",
            link: operatorLinks + "delay.html",
            desc: "shift the emissions from an Observable forward in time by a particular amount",
            cmd: `.delay(new Date(Date.now() + 1000));`,
            minInput: 1,
            maxInput: 1
          },
        ]
      },
      {
        name: "Conditional and Boolean Operators",
        desc: "Operators that evaluate one or more Observables or items emitted by Observables",
        list: [
          {
            name: "All",
            link: operatorLinks + "all.html",
            desc: "determine whether all items emitted by an Observable meet some criteria",
            cmd: `.every(function (x) {
    return x < 6;
  });`,
            minInput: 1,
            maxInput: 1
          },
          {
            name: "TakeWhile",
            link: operatorLinks + "takewhile.html",
            desc: "discard items emitted by an Observable after a specified condition becomes false",
            cmd: `.takeWhile(function (x) { return x < 3; })`,
            minInput: 1,
            maxInput: 1
          },
        ]
      },
      {
        name: "Mathematical and Aggregate Operators",
        desc: "Operators that operate on the entire sequence of items emitted by an Observable",
        list: [
          {
            name: "Average",
            link: operatorLinks + "average.html",
            desc: "discard items emitted by an Observable after a specified condition becomes false",
            cmd: `.average()`,
            minInput: 1,
            maxInput: 1
          },
        ]
      },
      {
        name: "Backpressure Operators",
        desc: "strategies for coping with Observables that produce items more rapidly than their observers consume them",
        list: [
          {
            name: "windowed",
            link: operatorLinks + "backpressure.html",
            desc: "allows the ControlledObservable to run somewhat ahead of the observer from time to time",
            cmd: `.windowed(1)`,
            minInput: 1,
            maxInput: 1
          },
        ]
      },
      {
        name: "Connectable Observable Operators",
        desc: "Specialty Observables that have more precisely-controlled subscription dynamics",
        list: [
          {
            name: "Publish",
            link: operatorLinks + "publish.html",
            desc: "convert an ordinary Observable into a connectable Observable",
            cmd: `.publish()`,
            minInput: 1,
            maxInput: 1
          },
          {
            name: "RefCount",
            link: operatorLinks + "refcount.html",
            desc: "make a Connectable Observable behave like an ordinary Observable",
            cmd: `.refCount()`,
            minInput: 1,
            maxInput: 1
          },
        ]
      }
    ];
  }

  public getOperators() {
    return this.rxOperators;
  }

  public setCreationOption(selectedCreation) {
    this.selectedCreationOption=selectedCreation;
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

  public controlScene(command){
    this.controlSubject.next(command);
  }
  public getControlChanges() {
    return this.controlSubject;
  }

  public getInitialData(width,height) {
    const createOperator=   this.rxOperators.map(optype => optype.list.filter(op=>op.name=='Create'   )[0]).filter(op=>op)[0];
    const subscribeOperator=this.rxOperators.map(optype => optype.list.filter(op=>op.name=='Subscribe')[0]).filter(op=>op)[0];
    const xLoc = width / 2 - 25;
    const yLoc = 100;
    const nodes = [
      {id: 0, x: xLoc, y: yLoc, data:createOperator},
      {id: 1, x: xLoc, y: yLoc + 200,data:subscribeOperator}
    ];
    const edges = [{source: nodes[0], target: nodes[1]}];
    const lastIndex = 2;
    return {edges, nodes, lastIndex};
  }
}
