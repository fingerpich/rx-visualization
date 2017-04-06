import {Observable} from "rxjs/Rx";

export class Distinct {
  public static title = "Distinct";
  public static link = "http://reactivex.io/documentation/operators/distinct.html";
  public static desc = "suppress duplicate items emitted by an Observable";

  public runner = () => {
    return this.graphInputs[0].distinct();
  };

  private static propertiesType = [];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public toString = () => {
    return `.distinct()`;
  }
}
