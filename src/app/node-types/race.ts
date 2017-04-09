import {Observable} from "rxjs/Rx";

export class Race {
  protected static title = "Race";
  protected static link = "http://reactivex.io/documentation/operators/race.html";
  protected static desc = "given two or more source Observables, emit all of the items from only the first of these Observables to emit an item or notification";
  protected static maxInput = 300;
  protected static minInput = 2;

  protected static propertiesType = [];

  public runner = () => {
    return Observable.race(...this.graphInputs);
  };

  public toString = ({}) => {
    return 'Observable.race(' + this.graphInputs.join(",") + ')';
  };


  public properties = {};
  public graphInputs = [];
}
