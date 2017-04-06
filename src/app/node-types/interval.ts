import {Observable} from "rxjs/Rx";

export class Interval {
  public static title = "Interval";
  public static link = "http://reactivex.io/documentation/operators/interval.html";
  public static desc = "create an Observable that emits a sequence of integers spaced by a given time interval";

  public runner = () => {
    return Observable.interval(this.properties.interval);
  };

  private static propertiesType = [{name:"interval",type: 'number'}];
  public properties = {
    interval:500/* ms */,
  };

  public graphInputs = [];
  public maxInput = 0;
  public minInput = 0;

  public toString = () => {
    return 'Observable.interval('+this.properties.interval+')';
  }
}
