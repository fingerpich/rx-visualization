import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";
import {PropertyType} from "./property-type";
import {PropertyTypeEnum} from "./propertyType.enum";

export class Defer extends RxNode {
  protected static title = "Defer";
  protected static link = "http://reactivex.io/documentation/operators/defer.html";
  protected static desc = "do not create the Observable until the observer subscribes, and create a fresh Observable for each observer";
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = new PropertyType("result",PropertyTypeEnum.String);

  public runner = () => {
    return Observable.defer(() => {
      return Observable.of(this.properties.result);
    });
  };
  public toString = () => {
    return 'Observable.defer(() => { return Observable.of(' + this.properties.result + '); });';
  };


  public properties = {
    result: "42"
  };
  public graphInputs = [];
}
