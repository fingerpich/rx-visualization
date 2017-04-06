import {Observable} from "rxjs/Rx";

export class Range {
  public static title = "Range";
  public static link = "http://reactivex.io/documentation/operators/range.html";
  public static desc = "create an Observable that emits a particular range of sequential integers";

  public runner = () => {
    return Observable.range(this.properties.start, this.properties.count);
  };

  private static propertiesType = [{start: 'Number'}, {count: 'Number'}];
  public properties = {
    start: 0,
    count: 3
  };

  public graphInputs = [];
  public maxInput = 0;
  public minInput = 0;

  public commandMaker = () => {
    return 'Observable.range(' + this.properties.start + ', ' + this.properties.count + ')';
  }
}
