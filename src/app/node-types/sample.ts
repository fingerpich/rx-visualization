import {Observable} from "rxjs/Rx";

export class Sample {
  public static title = "Sample";
  public static link = "http://reactivex.io/documentation/operators/sample.html";
  public static desc = "emit the most recent items emitted by an Observable within periodic time intervals";

  public runner = ({}) => {
    return this.graphInputs[0].sample(this.properties.periodicTimeIntervals);
  };

  private static propertiesType = [{periodicTimeIntervals: "number"}];
  public properties = {
    periodicTimeIntervals: 1000
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = ({}) => {
    return '.sample(' + this.properties.periodicTimeIntervals + '))';
  }
}
