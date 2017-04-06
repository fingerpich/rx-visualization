import {Observable} from "rxjs/Rx";

export class From {
  public static title = "From";
  public static link = "http://reactivex.io/documentation/operators/from.html";
  public static desc = "convert various other objects and data types into Observables";

  public runner = () => {
    return Observable.from(this.properties.list);
  };

  private static propertiesType = [{name:"list",type:'list'}];
  public properties = {
    list: [1,2,3]
  };

  public graphInputs = [];
  public maxInput = 0;

  public toString = () => {
    return 'Observable.from('+this.properties.list.join(",")+')';
  }
}
