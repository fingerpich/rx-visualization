import {RxNode} from './rxNode';
import {max} from 'rxjs/operators';

export class Max extends RxNode {
  protected static title = 'Max';
  protected static desc = 'Determine, and emit, the maximum-valued item emitted by an Observable';
  protected static minInput = 1;
  protected static maxInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(max());
  }
  public toString = () => {
    return '.pipe(max())';
  }
}
