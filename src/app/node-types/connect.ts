import { Subject} from 'rxjs/Subject';
import {RxNode} from './rxNode';

export class Connect extends RxNode {
  protected static title = 'Connect';
  protected static desc = 'instruct a connectable Observable to begin emitting items to its subscribers';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public nodeClick = new Subject();
  public graphInputs = [];

  public runner = () => {
    return this.nodeClick.subscribe(() => {
      this.graphInputs[0].observable.connect();
    });
  }
  public toString = () => {
    return '.connect()';
  }
}
