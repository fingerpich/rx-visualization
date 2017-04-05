import {Observable} from "rxjs/Rx";

export class Min {
  public static title = "Min";
  public static link = "http://reactivex.io/documentation/operators/min.html";
  public static desc = " determine, and emit, the minimum-valued item emitted by an Observable";

  public runner = () => {
    return this.graphInputs[0].min();
  };

  private static propertiesType = [{}];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = () => {
    return '.min()';
  }
}
