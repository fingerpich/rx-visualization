import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";
import {PropertyType} from "./property-type";
import {PropertyTypeEnum} from "./propertyType.enum";

export class Interval extends RxNode {
  protected static title = "Interval";
  protected static link = "http://reactivex.io/documentation/operators/interval.html";
  protected static desc = "create an Observable that emits a sequence of integers spaced by a given time interval";
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = new PropertyType("interval",PropertyTypeEnum.Number);

  public runner = () => {
    return Observable.interval(this.properties.interval);
  };
  public toString = () => {
    return 'Observable.interval('+this.properties.interval+')';
  };


  public properties = {
    interval:500/* ms */,
  };
  public graphInputs = [];
}
