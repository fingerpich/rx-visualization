import {Observable} from "rxjs/Rx";

export class Race {
  public static title = "Race";
  public static link = "http://reactivex.io/documentation/operators/race.html";
  public static desc = "given two or more source Observables, emit all of the items from only the first of these Observables to emit an item or notification";

  public runner = () => {
    return Observable.race(...this.graphInputs);
  };

  private static propertiesType = [];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 300;
  public static minInput = 2;

  public commandMaker = ({}) => {
    return 'Observable.race(' + this.graphInputs.join(",") + ')';
  }
}
