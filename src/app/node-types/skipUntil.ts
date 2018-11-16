import {RxNode} from './rxNode';
import {skipUntil} from 'rxjs/operators';

export class SkipUntil extends RxNode {
  protected static title = 'SkipUntil';
  protected static desc = 'Discard items emitted by an Observable until a second Observable emits an item';
  protected static maxInput = 2;
  protected static minInput = 2;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(skipUntil(
      this.graphInputs[1].observable/* the second observable connected to this block */,
    ));
  }
  public toString = ({}) => {
    return `.pipe(skipUntil(${this.graphInputs[1].node.data.toString()}))`;
  }
}
