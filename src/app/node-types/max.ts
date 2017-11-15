import {RxNode} from './rxNode';
import 'rxjs/add/operator/max';

export class Max extends RxNode {
  protected static title = 'Max';
  protected static link = 'http://reactivex.io/documentation/operators/max.html';
  protected static desc = 'determine, and emit, the maximum-valued item emitted by an Observable';
  protected static minInput = 1;
  protected static maxInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.max();
  }
  public toString = () => {
    return '.max()';
  }
}
