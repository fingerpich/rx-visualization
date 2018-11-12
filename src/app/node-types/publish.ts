import {RxNode} from './rxNode';

export class Publish extends RxNode {
  protected static title = 'Publish';
  protected static desc = 'convert an ordinary Observable into a connectable Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    const thisObservable = this.graphInputs[0].observable.map((x) => {
      x.published = true;
      return x;
    });
    setTimeout(() => {
      this.rxo = this.rx.publish();
    });
    return thisObservable;
  }

  public toString = () => {
    return '.publish()';
  }
}
