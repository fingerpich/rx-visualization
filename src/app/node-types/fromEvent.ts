import {Observable, Subject} from "rxjs/Rx";

export class FromEvent {
  protected static title = "FromEvent";
  protected static link = "http://reactivex.io/documentation/operators/from.html";
  protected static desc = "convert event into Observables";
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = [];

  public runner = () => {
    return this.nodeClick;
  };
  public toString = () => {
    return ".fromEvent(input, 'click');";
  };


  public properties = {};
  public nodeClick=new Subject();
  public graphInputs = [];
}
