import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";

export class Debounce extends RxNode {
  protected static title = "Debounce";
  protected static link = "http://reactivex.io/documentation/operators/debounce.html";
  protected static desc = "only emit an item from an Observable if a particular timespan has passed without it emitting another item";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{name:"debounceTime",type: 'number'}];

  public runner = () => {
    return this.graphInputs[0].debounce(this.properties.debounceTime);
  };
  public toString = () => {
    return '.debounce(' + this.properties.debounceTime + ')';
  };


  public properties = {
    debounceTime: 500 /* ms */
  };
  public graphInputs = [];
}
