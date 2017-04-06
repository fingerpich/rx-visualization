import {Observable} from "rxjs/Rx";

export class Skip {
  public static title = "Skip";
  public static link = "http://reactivex.io/documentation/operators/skip.html";
  public static desc = "suppress the first n items emitted by an Observable";

  public runner = ({}) => {
    return this.graphInputs[0].skip(this.properties.itemCount);
  };

  private static propertiesType = [{name:"itemCount",type: "number"}];
  public properties = {
    itemCount: 2
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public toString = ({}) => {
    return '.skip(' + this.properties.itemCount + '))';
  }
}
