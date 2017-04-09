import {Observable} from "rxjs/Rx";

export class From {
  protected static title = "From";
  protected static link = "http://reactivex.io/documentation/operators/from.html";
  protected static desc = "convert various other objects and data types into Observables";
  protected maxInput = 0;
  protected minInput = 0;

  protected static propertiesType = [{name:"list",type:'list'}];

  public runner = () => {
    return Observable.from(this.properties.list);
  };
  public toString = () => {
    return 'Observable.from('+this.properties.list.join(",")+')';
  };


  public properties = {
    list: [1,2,3]
  };
  public graphInputs = [];
}
