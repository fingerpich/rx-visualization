
import {RxNode} from './rxNode';
export class SequenceEqual extends RxNode {
  protected static title = 'SequenceEqual';
  protected static desc = 'Determine whether two Observables emit the same sequence of items';
  protected static maxInput = 2;
  protected static minInput = 2;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.sequenceEqual(
      this.graphInputs[1].observable/* the second observable connected to this block */,
    );
  }
  public toString = ({}) => {
    return '.join(' + this.graphInputs[1].toString() + ')';
  }
}
