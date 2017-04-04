import {Observable} from "rxjs/Rx";

export class All {
  public static title = "All";
  public static link = "http://reactivex.io/documentation/operators/all.html";
  public static desc = "determine whether all items emitted by an Observable meet some criteria";

  public runner = ({}) => {
    return this.graphInputs[0].every(function (x) {
      return x < 6;
    });
  };

  private static propertiesType: [{}];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = ({}) => {
    return '.every(function (x) { return x < 6; })';
  }
}
