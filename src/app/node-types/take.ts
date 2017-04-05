import {Observable} from "rxjs/Rx";

export class Skip {
  public static title = "Skip";
  public static link = "http://reactivex.io/documentation/operators/skip.html";
  public static desc = "suppress the first n items emitted by an Observable";

  public runner = ({}) => {
    return this.graphInputs[0].skip(this.properties.periodicTimeIntervals);
  };

  private static propertiesType = [{periodicTimeIntervals: "number"}];
  public properties = {
    periodicTimeIntervals: 1000
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = ({}) => {
    return '.skip(' + this.properties.periodicTimeIntervals + '))';
  }
}
