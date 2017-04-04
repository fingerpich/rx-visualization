import {Observable} from "rxjs/Rx";

export class TakeWhile {
  public static title = "TakeWhile";
  public static link = "http://reactivex.io/documentation/operators/takewhile.html";
  public static desc = "discard items emitted by an Observable after a specified condition becomes false";

  public runner = ({}) => {
    return this.graphInputs[0].takeWhile(function (x) {
      return x < 3;
    });
  };

  private static propertiesType: [{}];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = ({}) => {
    return '.takeWhile(function (x) { return x < 3; });';
  }
}
