import {Subject} from 'rxjs/Subject';
import {RxNode} from './rxNode';
import 'rxjs/add/observable/fromEvent';

export class FromEvent extends RxNode {
  protected static title = 'FromEvent';
  protected static link = 'http://reactivex.io/documentation/operators/from.html';
  protected static desc = 'convert event into Observables';
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = null;

  public properties = {};
  public nodeClick = new Subject();
  public graphInputs = [];

  public runner = () => {
    return this.nodeClick;
  }
  public toString = () => {
    return '.fromEvent(input, "click");';
  }
}
