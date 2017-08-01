import {RxNode} from './rxNode';

export class RefCount extends RxNode {
  protected static title = 'RefCount';
  protected static link = 'http://reactivex.io/documentation/operators/refcount.html';
  protected static desc = 'Make a Connectable Observable behave like an ordinary Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.refCount();
  }
  public toString = () => {
    return '.refCount()';
  }
}
