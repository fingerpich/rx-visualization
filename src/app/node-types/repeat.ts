import {Observable} from "rxjs/Rx";

export class Repeat {
  public static title = "Repeat";
  public static link = "http://reactivex.io/documentation/operators/repeat.html";
  public static desc = "create an Observable that emits a particular item multiple times";

  public runner = () => {
    // return Observable.repeat(this.properties.itemToRepeat, this.properties.count);
  };

  private static propertiesType = [{name:"itemToRepeat",type: 'any'}, {name:"count",type: 'number'}];
  public properties = {
    itemToRepeat: 'hello',
    count: 3
  };

  public graphInputs = [];
  public maxInput = 0;
  public minInput = 0;

  public toString = () => {
    return 'Observable.repeat(' + this.properties.itemToRepeat + ', ' + this.properties.count + ')';
  }
}
