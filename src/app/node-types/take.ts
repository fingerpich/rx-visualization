import {Observable} from "rxjs/Rx";

export class Take {
  public static title = "Take";
  public static link = "http://reactivex.io/documentation/operators/take.html";
  public static desc = "emit only the first n items emitted by an Observable";

  public runner = ({}) => {
    return this.graphInputs[0].take(this.properties.itemCount);
  };

  private static propertiesType = [{name:"itemCount",type: "number"}];
  public properties = {
    itemCount: 2
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public toString = ({}) => {
    return '.take(' + this.properties.itemCount + '))';
  }
}
