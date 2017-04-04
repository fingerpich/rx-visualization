import {Observable} from "rxjs/Rx";

export class Join {
  public static title = "Join";
  public static link = "http://reactivex.io/documentation/operators/join.html";
  public static desc = "combine items emitted by two Observables whenever an item from one Observable is emitted during a time window defined according to an item emitted by the other Observable";

  public static runner = ({graphInputs}) => {
    return graphInputs[0].join(
      graphInputs[1]/* the second observable connected to this block */,
      function () {
        return Observable.timer(0);
      },
      function () {
        return Observable.timer(0);
      },
      function (x, y) {
        return x + y;
      }
    )
  };

  private static propertiesType: [{}];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 2;
  public static minInput = 2;

  public static commandMaker = ({}) => {
    return '';
  }
}
