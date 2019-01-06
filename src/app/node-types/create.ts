import {Observable} from 'rxjs';
import {RxNode} from './rxNode';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';

export class Create extends RxNode {
  protected static title = 'Create';
  protected static desc = 'create an Observable from scratch by calling observer methods programmatically';
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = new PropertyType('items', PropertyTypeEnum.List,
    new PropertyType('', PropertyTypeEnum.Object, [
      new PropertyType('time', PropertyTypeEnum.Number),
      new PropertyType('value', PropertyTypeEnum.Number)
    ], '')
  , '');

  public properties = {
    items: [
      {time: 0, value: 1}
    ]
  };
  public graphInputs = [];

  public runner = () => {
    const delay = (observer, delayTime, value, isLastOne) => {
      setTimeout(() => {
        observer.next(value);
        if (isLastOne) {
          observer.complete();
        }
      }, delayTime || 0);
    };
    return Observable.create((observer) => {
      const maxTimeItem = this.properties.items.reduce((max, item) => max.time <= item.time ? item : max, {time: 0});
      for (const item of this.properties.items) {
        delay(observer, item.time, item.value, maxTimeItem === item);
      }
    });
  }
  public toString = () => {
    const list = this.properties.items;
    const getNext = ({value, time}) => {
      return time ? `setTimeout(function(){ observer.next(${value});}, ${time})` : `observer.next(${value});`;
    };
    let s = '';
    for (const item of list) {
      s += getNext(<any>item);
    }
    return `Observable.create((observer) => {${s}})`;
  }
}
