import {Observable} from "rxjs/Rx";

export class Sum {
  public static title = "Sum";
  public static link = "http://reactivex.io/documentation/operators/sum.html";
  public static desc = "calculates the sum of numbers emitted by an Observable and emits this sum";

  public runner = () => {
    return this.graphInputs[0].sum();
  };

  private static propertiesType = [];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = () => {
    return '.sum()';
  }
}
