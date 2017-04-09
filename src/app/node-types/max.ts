import {Observable} from "rxjs/Rx";

export class Max {
  protected static title = "Max";
  protected static link = "http://reactivex.io/documentation/operators/max.html";
  protected static desc = "determine, and emit, the maximum-valued item emitted by an Observable";
  protected static minInput = 1;
  protected static maxInput = 1;

  protected static propertiesType = [];

  public runner = () => {
    return this.graphInputs[0].max();
  };
  public toString = () => {
    return '.max()';
  };


  public properties = {};
  public graphInputs = [];
}
