import {Observable} from "rxjs/Rx";

export class Create {
  public static title = "Create";
  public static link = "http://reactivex.io/documentation/operators/create.html";
  public static desc = "create an Observable from scratch by calling observer methods programmatically";

  public runner = ({list}) => {
    const delay = (observer, delay, value) => {
      setTimeout(() => {
        observer.next(value);
      }, delay || 0);
    };
    return Observable.create((observer) => {
      for (let l of list) {
        delay(observer, l.time, l.value);
      }
    });
  };

  private static propertiesType: [{list: 'list'}];
  public properties = {
    list: [{t: 0, v: 1}]
  };

  public graphInputs = [];
  public maxInput = 0;

  public commandMaker = () => {
    const list = this.properties.list;
    const getNext = ({value, time}) => {
      return time ? 'setTimeout(function(){observer.next(' + value + ');},' + time + ')' : 'observer.next(' + value + ');'
    };
    let s = "";
    for (let item of list) {
      s += getNext(<any>item)
    }
    return 'Observable.create((observer)=>{' + s + '})';
  }
}
