import {RxNode} from './rxNode';
import {refCount} from 'rxjs/operators';

export class RefCount extends RxNode {
  protected static title = 'RefCount';
  protected static desc = 'Make a Connectable Observable behave like an ordinary Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(refCount());
  }
  public toString = () => {
    return '.pipe(refCount())';
  }
}
