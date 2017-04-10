import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";

export class Repeat extends RxNode {
  protected static title = "Repeat";
  protected static link = "http://reactivex.io/documentation/operators/repeat.html";
  protected static desc = "create an Observable that emits a particular item multiple times";
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = [{name:"itemToRepeat",type: 'any'}, {name:"count",type: 'number'}];

  public runner = () => {
    // return Observable.repeat(this.properties.itemToRepeat, this.properties.count);
  };
  public toString = () => {
    return 'Observable.repeat(' + this.properties.itemToRepeat + ', ' + this.properties.count + ')';
  };


  public properties = {
    itemToRepeat: 'hello',
    count: 3
  };
  public graphInputs = [];
}
