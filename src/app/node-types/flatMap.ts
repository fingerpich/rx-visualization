import {Observable} from "rxjs/Rx";

export class FlatMap {
  public static title = "FlatMap";
  public static link = "http://reactivex.io/documentation/operators/flatmap.html";
  public static desc = "transform the items emitted by an Observable into Observables, then flatten the emissions from those into a single Observable";

  public runner = () => {
    this.graphInputs[0].flatMapLatest(function (x) {
      return Observable.range(x, 2);
    });
  };

  private static propertiesType = [{list: 'list'}];
  public properties = {
    list: [{t: 0}]
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public commandMaker = () => {
    return '.flatMapLatest(function (x) {return Observable.range(x, 2);})';
  }
}
