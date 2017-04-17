import {RxNode} from "./rxNode";
export class IgnoreElements extends RxNode {
  protected static title = "IgnoreElements";
  protected static link = "http://reactivex.io/documentation/operators/ignoreElements.html";
  protected static desc = "do not emit any items from an Observable but mirror its termination notification";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public runner = () => {
    return this.graphInputs[0].ignoreElements();
  };
  public static toString = () => {
    return '.ignoreElements()';
  };


  public properties = {};
  public graphInputs = [];
}
