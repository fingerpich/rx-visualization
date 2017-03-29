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
    this.rxOperators = [
      {
        name: "Creation Operators", list: [
        "ajax",
        "bindCallback",
        "bindNodeCallback",
        "create",
        "defer",
        "empty",
        "from",
        "fromEvent",
        "fromEventPattern",
        "fromPromise",
        "generate",
        "interval",
        "never",
        "of",
        "repeat",
        "repeatWhen",
        "range",
        "throw",
        "timer",
      ]
      },
      {
        name: "Transformation Operators", list: [
        "buffer",
        "bufferCount",
        "bufferTime",
        "bufferToggle",
        "bufferWhen",
        "concatMap",
        "concatMapTo",
        "exhaustMap",
        "expand",
        "groupBy",
        "map",
        "mapTo",
        "mergeMap",
        "mergeMapTo",
        "mergeScan",
        "pairwise",
        "partition",
        "pluck",
        "scan",
        "switchMap",
        "switchMapTo",
        "window",
        "windowCount",
        "windowTime",
        "windowToggle",
        "windowWhen"
      ]
      },
      {
        name:"Filtering Operators", list: [
        "debounce",
        "debounceTime",
        "distinct",
        "distinctKey",
        "distinctUntilChanged",
        "distinctUntilKeyChanged",
        "elementAt",
        "filter",
        "first",
        "ignoreElements",
        "audit",
        "auditTime",
        "last",
        "sample",
        "sampleTime",
        "single",
        "skip",
        "skipUntil",
        "skipWhile",
        "take",
        "takeLast",
        "takeUntil",
        "takeWhile",
        "throttle",
        "throttleTime",
      ]
      },
      {
        name: "Combination Operators", list: [
        "combineAll",
        "combineLatest",
        "concat",
        "concatAll",
        "exhaust",
        "forkJoin",
        "merge",
        "mergeAll",
        "race",
        "startWith",
        "switch",
        "withLatestFrom",
        "zip",
        "zipAll"
      ]
      },
      {
        name: "Multicasting Operators", list: [
        "cache",
        "multicast",
        "publish",
        "publishBehavior",
        "publishLast",
        "publishReplay",
        "share"
      ]
      },
      {
        name: "Error Handling Operators", list: [
        "catch",
        "retry",
        "retryWhen",
      ]
      },
      {
        name: "Utility Operators", list: [
        "do",
        "delay",
        "delayWhen",
        "dematerialize",
        "finally",
        "let",
        "materialize",
        "observeOn",
        "subscribeOn",
        "timeInterval",
        "timestamp",
        "timeout",
        "timeoutWith",
        "toArray",
        "toPromise"
      ]
      },
      {
        name: "Conditional and Boolean Operators", list: [
        "defaultIfEmpty",
        "every",
        "find",
        "findIndex",
        "isEmpty",
      ]
      },
      {
        name: "Mathematical and Aggregate Operators", list: [
        "count",
        "max",
        "min",
        "reduce"
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
}
