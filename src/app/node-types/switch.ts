import {RxNode} from './rxNode';
import {switchAll} from 'rxjs/operators';
export class Switch extends RxNode {
  protected static title = 'switchAll';
  protected static desc = 'convert an Observable that emits Observables into a single Observable that emits the items' +
    ' emitted by the most-recently-emitted of those Observables';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;


  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(switchAll());
  }
  public toString = () => {
    return '.pipe(switchAll())';
  }
}
