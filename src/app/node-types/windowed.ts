import {Observable} from "rxjs/Rx";

export class Windowed {
  public static title = "Windowed";
  public static link = "http://reactivex.io/documentation/operators/backpressure.html";
  public static desc = "allows the ControlledObservable to run somewhat ahead of the observer from time to time";

  public runner = () => {
    return this.graphInputs[0].windowed(this.properties.time);
  };

  private static propertiesType: [{debounceTime: 'Number'}];
  public properties = {
    time: 50
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = () => {
    return '.debounce(' + this.properties.time + ')';
  }
}
