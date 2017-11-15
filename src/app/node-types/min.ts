import {RxNode} from './rxNode';
import 'rxjs/add/operator/min';

export class Min extends RxNode {
  protected static title = 'Min';
  protected static link = 'http://reactivex.io/documentation/operators/min.html';
  protected static desc = ' determine, and emit, the minimum-valued item emitted by an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.min();
  }
  public toString = () => {
    return '.min()';
  }
}
