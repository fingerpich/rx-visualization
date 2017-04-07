import {Observable} from "rxjs/Rx";

export class Create {
  public static title = "Create";
  public static link = "http://reactivex.io/documentation/operators/create.html";
  public static desc = "create an Observable from scratch by calling observer methods programmatically";

  public data=Create;
  public runner = () => {
    const delay = (observer, delay, value) => {
      setTimeout(() => {
        observer.next(value);
      }, delay || 0);
    };
    return Observable.create((observer) => {
      for (let l of this.properties.list) {
        delay(observer, l.time, l.value);
      }
    });
  };

  public static propertiesType = [{name:"list",type: 'list', params:[{name:'time',type:'Number'},{name:'value',type:'Number'}]}];
  public properties = {
    list: [{time: 0, value: 1}]
  };

  public graphInputs = [];
  public maxInput = 0;
  public minInput = 0;

  public toString = () => {
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
