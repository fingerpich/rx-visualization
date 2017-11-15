import {RxNode} from './rxNode';
import 'rxjs/add/operator/skipUntil';

export class SkipUntil extends RxNode {
  protected static title = 'SkipUntil';
  protected static link = 'http://reactivex.io/documentation/operators/SkipUntil.html';
  protected static desc = 'Discard items emitted by an Observable until a second Observable emits an item';
  protected static maxInput = 2;
  protected static minInput = 2;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.skipUntil(
      this.graphInputs[1].observable/* the second observable connected to this block */,
    );
  }
  public toString = ({}) => {
    return '.skipUntil(' + this.graphInputs[1].node.data.toString() + ')';
  }
}
