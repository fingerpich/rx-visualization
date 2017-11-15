import {Observable} from 'rxjs/Observable';
import {RxNode} from './rxNode';
import 'rxjs/add/observable/merge';

export class Merge extends RxNode {
  protected static title = 'Merge';
  protected static link = 'http://reactivex.io/documentation/operators/merge.html';
  protected static desc = 'combine multiple Observables into one by merging their emissions';
  protected static maxInput = 300;
  protected static minInput = 2;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = ({}) => {
    return Observable.merge(...this.graphInputs.map(gi => gi.observable));
  }
  public toString = ({}) => {
    return 'Observable.mergeDelayError(' + this.graphInputs.map(gi => gi.node.data.title).join(',') + ')';
  }
}
