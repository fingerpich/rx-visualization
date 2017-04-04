import {Observable} from "rxjs/Rx";

export class From {
  public static title = "From";
  public static link = "http://reactivex.io/documentation/operators/from.html";
  public static desc = "convert various other objects and data types into Observables";

  public runner = () => {
    return Observable.from(this.properties.list);
  };

  private static propertiesType = [{list: '[string]'}];
  public properties = {
    list: [1,2,3]
  };

  public graphInputs = [];
  public maxInput = 0;

  public commandMaker = () => {
    return 'Observable.from('+this.properties.list.join(",")+')';
  }
}
