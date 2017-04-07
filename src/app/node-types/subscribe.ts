import {Observable} from "rxjs/Rx";

export class Subscribe {
  public static title = "Subscribe";
  public static link = "http://reactivex.io/documentation/operators/subscribe.html";
  public static desc = "operate upon the emissions and notifications from an Observable";
public data=Subscribe;
  public runner = ({}) => {
    this.graphInputs[0].subscribe(
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
  };

  public static propertiesType = [];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public toString = ({}) => {
    return `.subscribe(
      function (x) { console.log('Next: %s', x); },/* on next*/
      function (err) { console.log('Error: %s', err); }, /* on error*/
      function () { console.log('Completed');/* on complete*/
      });`;
  }
}
