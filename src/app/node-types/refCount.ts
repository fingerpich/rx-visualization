import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";

export class RefCount extends RxNode {
  protected static title = "RefCount";
  protected static link = "http://reactivex.io/documentation/operators/refcount.html";
  protected static desc = "make a Connectable Observable behave like an ordinary Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [];

  public runner = () => {
    return this.graphInputs[0].refCount();
  };
  public static toString = () => {
    return '.refCount()';
  };


  public properties = {};
  public graphInputs = [];
}
