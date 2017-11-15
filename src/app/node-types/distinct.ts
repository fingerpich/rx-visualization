import {RxNode} from './rxNode';
import 'rxjs/add/operator/distinct';

export class Distinct extends RxNode {
  protected static title = 'Distinct';
  protected static link = 'http://reactivex.io/documentation/operators/distinct.html';
  protected static desc = 'suppress duplicate items emitted by an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.distinct();
  }
  public toString = () => {
    return `.distinct()`;
  }
}
