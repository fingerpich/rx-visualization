import {RxNode} from './rxNode';
import {min} from 'rxjs/operators';

export class Min extends RxNode {
  protected static title = 'Min';
  protected static desc = ' determine, and emit, the minimum-valued item emitted by an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(min());
  }
  public toString = () => {
    return '.pipe(min())';
  }
}
