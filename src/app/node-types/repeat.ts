import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";
import {PropertyTypeEnum} from "./propertyType.enum";
import {PropertyType} from "./property-type";

export class Repeat extends RxNode {
  protected static title = "Repeat";
  protected static link = "http://reactivex.io/documentation/operators/repeat.html";
  protected static desc = "create an Observable that emits a particular item multiple times";
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = new PropertyType("object",PropertyTypeEnum.Object,[
    new PropertyType("itemToRepeat",PropertyTypeEnum.String),
    new PropertyType("count",PropertyTypeEnum.Number)
  ],"");

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
