import {Observable} from "rxjs/Rx";

export class Average {
  public static title = "Average";
  public static link = "http://reactivex.io/documentation/operators/average.html";
  public static desc = "discard items emitted by an Observable after a specified condition becomes false";

  public runner = () => {
    return this.graphInputs[0].average();
  };

  private static propertiesType = [];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = () => {
    return '.average()';
  }
}
