import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";

export class From extends RxNode {
  protected static title = "From";
  protected static link = "http://reactivex.io/documentation/operators/from.html";
  protected static desc = "convert various other objects and data types into Observables";
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = [{name:"list",type: 'list', params:[{name:'number',type:'number'}]}];

  public runner = () => {
    return Observable.from(this.properties.list);
  };
  public toString = () => {
    return 'Observable.from('+this.properties.list.join(",")+')';
  };


  public properties = {
    list: [
      {number:1},
      {number:2}
      ]
  };
  public graphInputs = [];
}
