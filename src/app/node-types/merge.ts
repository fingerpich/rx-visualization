import {Observable} from "rxjs/Rx";

export class Merge {
  public static title = "Merge";
  public static link = "http://reactivex.io/documentation/operators/merge.html";
  public static desc = "combine multiple Observables into one by merging their emissions";

  public runner = ({}) => {
    return Observable.merge(...this.graphInputs);
  };

  private static propertiesType: [{}];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 300;
  public static minInput = 2;

  public commandMaker = ({}) => {
    return 'Observable.mergeDelayError(' + this.graphInputs.join(",") + ')';
  }
}
