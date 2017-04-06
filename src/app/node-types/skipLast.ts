import {Observable} from "rxjs/Rx";

export class SkipLast {
  public static title = "SkipLast";
  public static link = "http://reactivex.io/documentation/operators/skiplast.html";
  public static desc = "suppress the final n items emitted by an Observable";

  public runner = ({}) => {
    return this.graphInputs[0].skipLast(this.properties.itemCount);
  };

  private static propertiesType = [{name:"itemCount",type: "number"}];
  public properties = {
    itemCount: 2
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public toString = ({}) => {
    return '.skipLast(' + this.properties.itemCount + '))';
  }
}
