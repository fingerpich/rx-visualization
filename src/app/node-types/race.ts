import {race} from 'rxjs';
import {RxNode} from './rxNode';

export class Race extends RxNode {
  protected static title = 'Race';
  protected static desc = 'given two or more source Observables, ' +
    'emit all of the items from only the first of these Observables to emit an item or notification';
  protected static maxInput = 300;
  protected static minInput = 2;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return race(this.graphInputs.map(gi => gi.observable));
  }
  public toString = ({}) => {
    return `race(${this.graphInputs.map(gi => gi.node.data.title).join(',')})`;
  }
}
