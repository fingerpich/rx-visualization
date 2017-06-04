import {Observable} from 'rxjs/Rx';
import {RxNode} from './rxNode';

export class Subscribe extends RxNode {
  protected static title = 'Subscribe';
  protected static link = 'http://reactivex.io/documentation/operators/subscribe.html';
  protected static desc = 'operate upon the emissions and notifications from an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    // const thisObservable = this.graphInputs[0];
    const thisObservable = this.graphInputs[0].map((x)=>{
      x.subscribed = true;
      return x;
    });
    setTimeout(()=>{
      // thisObservable.subscribe(
      this.rx.subscribe(
        function (x) {
          console.log('Next: %s', x);
        }, /* on next*/
        function (err) {
          console.log('Error: %s', err);
        }, /* on error*/
        function () {
          console.log('Completed');
          /* on complete*/
        });
    });
    return thisObservable;
  };

  public toString = () => {
    return `.subscribe(
      function (x) { console.log('Next: %s', x); },/* on next*/
      function (err) { console.log('Error: %s', err); }, /* on error*/
      function () { console.log('Completed');/* on complete*/
      });`;
  };
}
