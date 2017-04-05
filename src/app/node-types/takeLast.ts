import {Observable} from "rxjs/Rx";

export class TakeLast {
  public static title = "TakeLast";
  public static link = "http://reactivex.io/documentation/operators/takelast.html";
  public static desc = "emit only the final n items emitted by an Observable";

  public runner = ({}) => {
    return this.graphInputs[0].takeLast(this.properties.itemCount);
  };

  private static propertiesType = [{itemCount: "number"}];
  public properties = {
    itemCount: 2
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = ({}) => {
    return '.takeLast(' + this.properties.itemCount + '))';
  }
}
