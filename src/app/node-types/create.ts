import {Observable} from "rxjs/Rx";

export default class Create {
  public static name = "Create";
  public static link = "http://reactivex.io/documentation/operators/create.html";
  public static desc = "create an Observable from scratch by calling observer methods programmatically";

  public static runner = ({list}) => {
    const delay = (observer, delay, value) => {
      setTimeout(() => {
        observer.next(value);
      }, delay || 0);
    };
    Observable.create((observer) => {
      for (let l of list) {
        delay(observer, l.time, l.value);
      }
    });
  };

  private static propertiesType:[{list:'list'}];
  public properties = {
    list: [{t: 0, v: 1}]
  };

  public graphInputs = [];
  public maxInput = 0;

  public commandMaker = `
            function getNexts(value,time){return time? 'setTimeout(function(){observer.next('+l.v+');},'+l.t+')' : 'observer.next('+l.v+');'}}
            'Observable.create((observer)=>{'+((function(){for(var l in list){getNexts(l)}})())+'})'`;
}
