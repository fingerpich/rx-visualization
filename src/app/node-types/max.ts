import {Observable} from "rxjs/Rx";

export class Max {
  public static title = "Max";
  public static link = "http://reactivex.io/documentation/operators/max.html";
  public static desc = "determine, and emit, the maximum-valued item emitted by an Observable";

  public runner = () => {
    return this.graphInputs[0].max();
  };

  private static propertiesType = [{}];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = () => {
    return '.max()';
  }
}
