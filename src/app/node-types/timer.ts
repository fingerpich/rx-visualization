import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";
import {PropertyTypeEnum} from "./propertyType.enum";
import {PropertyType} from "./property-type";

export class Timer extends RxNode {
  protected static title = "Timer";
  protected static link = "http://reactivex.io/documentation/operators/timer.html";
  protected static desc = "create an Observable that emits a particular item after a given delay";
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = new PropertyType("object",PropertyTypeEnum.Object,[
    new PropertyType("delay",PropertyTypeEnum.Number),
    new PropertyType("interval",PropertyTypeEnum.Number)
  ],"");

  public runner = () => {
    return Observable.timer(this.properties.delay,this.properties.interval);
  };
  public toString = () => {
    return 'Observable.timer('+this.properties.delay+', '+this.properties.interval+')';
  };


  public properties = {
    delay:200/* ms */,
    interval:500/* ms */,
  };
  public graphInputs = [];
}
