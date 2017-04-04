import {Observable} from "rxjs/Rx";

export class Defer {
  public static title = "Defer";
  public static link = "http://reactivex.io/documentation/operators/defer.html";
  public static desc = "do not create the Observable until the observer subscribes, and create a fresh Observable for each observer";

  public runner = () => {
    return Observable.defer(() => {
      return Observable.of(this.properties.result);
    });
  };

  private static propertiesType: [{result: 'string'}];
  public properties = {
    result: "42"
  };

  public graphInputs = [];
  public maxInput = 0;

  public commandMaker = () => {
    return 'Observable.defer(() => { return Observable.of(' + this.properties.result + '); });';
  }
}