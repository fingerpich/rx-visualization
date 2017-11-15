import {RxNode} from './rxNode';
import 'rxjs/add/operator/ignoreElements';

export class IgnoreElements extends RxNode {
  protected static title = 'IgnoreElements';
  protected static link = 'http://reactivex.io/documentation/operators/ignoreElements.html';
  protected static desc = 'do not emit any items from an Observable but mirror its termination notification';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.ignoreElements();
  }
  public toString = () => {
    return '.ignoreElements()';
  }
}
