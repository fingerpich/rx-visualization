import {RxNode} from './rxNode';
import {ignoreElements} from 'rxjs/operators';

export class IgnoreElements extends RxNode {
  protected static title = 'IgnoreElements';
  protected static desc = 'do not emit any items from an Observable but mirror its termination notification';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(ignoreElements());
  }
  public toString = () => {
    return '.ignoreElements()';
  }
}
