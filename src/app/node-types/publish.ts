import {RxNode} from './rxNode';
import {publish, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

export class Publish extends RxNode {
  protected static title = 'Publish';
  protected static desc = 'convert an ordinary Observable into a connectable Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    const thisObsservable = this.graphInputs[0].observable.pipe(tap((x: any) => {
      x.published = true;
      // return x;
    }));
    setTimeout(() => {
      this.rxo = (this.rx as any).pipe(publish());
    });
    return thisObsservable;
  }

  public toString = () => {
    return '.pipe(publish())';
  }
}
