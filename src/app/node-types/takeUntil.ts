import {RxNode} from './rxNode';
export class TakeUntil extends RxNode {
  protected static title = 'TakeUntil';
  protected static desc = 'discard any items emitted by an Observable after a second Observable emits an item or terminates';
  protected static maxInput = 2;
  protected static minInput = 2;

  protected static propertiesType = null;

  public properties = {
    takeUntilFunction: 0,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.takeUntil(
      this.graphInputs[1].observable/* the second observable connected to this block */,
    );
  }
  public toString = () => {
    return '.takeUntil(' + TakeUntil.propertiesType.params[this.properties.takeUntilFunction].text + ')';
  }
}
