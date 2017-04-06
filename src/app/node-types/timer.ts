import {Observable} from "rxjs/Rx";

export class Timer {
  public static title = "Timer";
  public static link = "http://reactivex.io/documentation/operators/timer.html";
  public static desc = "create an Observable that emits a particular item after a given delay";

  public runner = () => {
    return Observable.timer(this.properties.delay,this.properties.interval);
  };

  private static propertiesType = [{name:"delay",type: 'number'},{name:"interval",type: 'number'}];
  public properties = {
    delay:200/* ms */,
    interval:500/* ms */,
  };

  public graphInputs = [];
  public maxInput = 0;
  public minInput = 0;

  public toString = () => {
    return 'Observable.timer('+this.properties.delay+', '+this.properties.interval+')';
  }
}
