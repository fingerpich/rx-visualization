import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";

export class Windowed extends RxNode {
  protected static title = "Windowed";
  protected static link = "http://reactivex.io/documentation/operators/backpressure.html";
  protected static desc = "allows the ControlledObservable to run somewhat ahead of the observer from time to time";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{name:"debounceTime",type: 'number'}];

  public runner = () => {
    return this.graphInputs[0].windowed(this.properties.time);
  };
  public toString = () => {
    return '.debounce(' + this.properties.time + ')';
  };


  public properties = {
    time: 50
  };
  public graphInputs = [];
}
