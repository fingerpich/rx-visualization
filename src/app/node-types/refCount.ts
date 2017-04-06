import {Observable} from "rxjs/Rx";

export class RefCount {
  public static title = "RefCount";
  public static link = "http://reactivex.io/documentation/operators/refcount.html";
  public static desc = "make a Connectable Observable behave like an ordinary Observable";

  public runner = () => {
    return this.graphInputs[0].refCount();
  };

  private static propertiesType = [];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public static toString = () => {
    return '.refCount()';
  }
}
