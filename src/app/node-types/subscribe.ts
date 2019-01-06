import {RxNode} from './rxNode';
import {map} from 'rxjs/operators';
import {NumberInfo} from '../scene/number-info';
import {Subject} from 'rxjs/Subject';

export class Subscribe extends RxNode {
  protected static title = 'Subscribe';
  protected static desc = 'operate upon the emissions and notifications from an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];
  public finishSubject = new Subject();

  public runner = () => {
    // const thisObservable = this.graphInputs[0];
    const thisObservable = this.graphInputs[0].observable.pipe(map((x: NumberInfo) => {
      x.subscribed = true;
      return x;
    }));
    setTimeout(() => {
      this.rxo = this.rx.subscribe((x) => {
          console.log('asc');
        },
        (err) => {
          // TODO: show errors in properties
        }, () => {
          this.finishSubject.next({finished: true});
        });
    });
    return thisObservable;
  }

  public toString = () => {
    return `.subscribe(
      function (x) { console.log('Next: %s', x); },/* on next*/
      function (err) { console.log('Error: %s', err); }, /* on error*/
      function () { console.log('Completed');/* on complete*/
      });`;
  }
}
