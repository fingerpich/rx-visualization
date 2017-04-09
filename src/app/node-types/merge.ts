import {Observable} from "rxjs/Rx";

export class Merge {
  protected static title = "Merge";
  protected static link = "http://reactivex.io/documentation/operators/merge.html";
  protected static desc = "combine multiple Observables into one by merging their emissions";
  protected static maxInput = 300;
  protected static minInput = 2;

  protected static propertiesType = [];

  public runner = ({}) => {
    return Observable.merge(...this.graphInputs);
  };
  public toString = ({}) => {
    return 'Observable.mergeDelayError(' + this.graphInputs.join(",") + ')';
  };


  public properties = {};
  public graphInputs = [];
}
