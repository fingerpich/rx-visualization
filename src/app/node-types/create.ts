import {Observable} from 'rxjs/Rx';
import {RxNode} from './rxNode';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';

export class Create extends RxNode {
  protected static title = 'Create';
  protected static link = 'http://reactivex.io/documentation/operators/create.html';
  protected static desc = 'create an Observable from scratch by calling observer methods programmatically';
  protected static maxInput = 0;
  protected static minInput = 0;

  // protected static propertiesType = [{name:'list',type: 'list', params:[{name:'time',type:'Number'},{name:'value',type:'Number'}]}];
  protected static propertiesType = new PropertyType('list', PropertyTypeEnum.List,
    new PropertyType('', PropertyTypeEnum.Object, [
      new PropertyType('time', PropertyTypeEnum.Number),
      new PropertyType('value', PropertyTypeEnum.Number)
    ], '')
  , '');

  public properties = {
    list: [
      {time: 0, value: 1}
    ]
  };
  public graphInputs = [];

  public runner = () => {
    const delay = (observer, delayTime, value) => {
      setTimeout(() => {
        observer.next(value);
      }, delayTime || 0);
    };
    return Observable.create((observer) => {
      for (const l of this.properties.list) {
        delay(observer, l.time, l.value);
      }
    });
  }
  public toString = () => {
    const list = this.properties.list;
    const getNext = ({value, time}) => {
      return time ? 'setTimeout(function(){ observer.next(' + value + ');},' + time + ')' : ' observer.next(' + value + ');';
    };
    let s = '';
    for (const item of list) {
      s += getNext(<any>item);
    }
    return 'Observable.create((observer)=>{' + s + '})';
  }
}
