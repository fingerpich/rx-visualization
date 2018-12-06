import {RxNode} from './rxNode';
import {share, tap} from 'rxjs/operators';
import {NumberInfo} from '../number-info';

export class Share extends RxNode {
  protected static title = 'Share';
  protected static desc = 'Share source among multiple subscribers.';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(
      share(),
      tap((x: NumberInfo) => x.shared = (x.shared || 0) + 1)
    );
  }

  public toString = () => {
    return '.pipe(publish())';
  }
}
