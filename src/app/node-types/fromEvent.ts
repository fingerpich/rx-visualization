import {Observable} from "rxjs/Rx";

export class FromEvent {
  public static title = "FromEvent";
  public static link = "http://reactivex.io/documentation/operators/from.html";
  public static desc = "convert event into Observables";

  public runner = () => {
    return Observable.bindCallback(this.nodeClick);
  };

  private static propertiesType = [];
  public properties = {};

  public nodeClick;
  public graphInputs = [];
  public maxInput = 0;

  public commandMaker = () => {
    return ".fromEvent(input, 'click');";
  }
}
