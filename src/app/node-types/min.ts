import {Observable} from "rxjs/Rx";

export class Min {
  protected static title = "Min";
  protected static link = "http://reactivex.io/documentation/operators/min.html";
  protected static desc = " determine, and emit, the minimum-valued item emitted by an Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [];

  public runner = () => {
    return this.graphInputs[0].min();
  };
  public toString = () => {
    return '.min()';
  };


  public properties = {};
  public graphInputs = [];
}
