import {merge, of} from 'rxjs';
import {RxNode} from './rxNode';

export class Merge extends RxNode {
  protected static title = 'Merge';
  protected static desc = 'combine multiple Observables into one by merging their emissions';
  protected static maxInput = 300;
  protected static minInput = 2;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = ({}) => {
    return merge(of(...this.graphInputs.map(gi => gi.observable)));
  }
  public toString = ({}) => {
    return `merge(of(${this.graphInputs.map(gi => gi.node.data.title).join(',')}))`;
  }
}
