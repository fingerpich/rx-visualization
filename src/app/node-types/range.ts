import {Observable} from "rxjs/Rx";

export class Range {
  protected static title = "Range";
  protected static link = "http://reactivex.io/documentation/operators/range.html";
  protected static desc = "create an Observable that emits a particular range of sequential integers";
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = [{name:"start",type: 'number'}, {name:"count",type: 'number'}];

  public runner = () => {
    return Observable.range(this.properties.start, this.properties.count);
  };
  public toString = () => {
    return 'Observable.range(' + this.properties.start + ', ' + this.properties.count + ')';
  };

  public properties = {
    start: 0,
    count: 3
  };
  public graphInputs = [];
}
