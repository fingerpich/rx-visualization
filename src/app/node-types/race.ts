import {Observable} from 'rxjs/Observable';
import {RxNode} from './rxNode';
import 'rxjs/add/operator/race';

export class Race extends RxNode {
  protected static title = 'Race';
  protected static link = 'http://reactivex.io/documentation/operators/race.html';
  protected static desc = 'given two or more source Observables, ' +
    'emit all of the items from only the first of these Observables to emit an item or notification';
  protected static maxInput = 300;
  protected static minInput = 2;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return Observable.race(this.graphInputs.map(gi => gi.observable));
  }
  public toString = ({}) => {
    return 'Observable.race(' + this.graphInputs.map(gi => gi.node.data.title).join(',') + ')';
  }
}
