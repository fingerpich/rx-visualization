import {Observable, Subject} from "rxjs/Rx";

export class FromEvent {
  public static title = "FromEvent";
  public static link = "http://reactivex.io/documentation/operators/from.html";
  public static desc = "convert event into Observables";

  public runner = () => {
    return this.nodeClick;
  };

  private static propertiesType = [];
  public properties = {};

  public nodeClick=new Subject();
  public graphInputs = [];
  public maxInput = 0;

  public toString = () => {
    return ".fromEvent(input, 'click');";
  }
}
