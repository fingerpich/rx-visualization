import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";
import {PropertyTypeEnum} from "./propertyType.enum";
import {PropertyType} from "./property-type";

export class Create extends RxNode{
  protected static title = "Create";
  protected static link = "http://reactivex.io/documentation/operators/create.html";
  protected static desc = "create an Observable from scratch by calling observer methods programmatically";
  protected static maxInput = 0;
  protected static minInput = 0;

  // protected static propertiesType = [{name:"list",type: 'list', params:[{name:'time',type:'Number'},{name:'value',type:'Number'}]}];
  protected static propertiesType = new PropertyType("list",PropertyTypeEnum.List,
    new PropertyType("object",PropertyTypeEnum.Object,[
      new PropertyType("time",PropertyTypeEnum.Number),
      new PropertyType("value",PropertyTypeEnum.Number)
    ],"")
  ,"");

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
  };

  public properties = {
    list: [
      {time: 0, value: 1}
      ]
  };
  public graphInputs = [];
}
