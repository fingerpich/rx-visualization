import {timer} from 'rxjs';
import {RxNode} from './rxNode';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';

export class Timer extends RxNode {
  protected static title = 'Timer';
  protected static desc = 'create an Observable that emits a particular item after a given delay';
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = new PropertyType('object', PropertyTypeEnum.Object, [
    new PropertyType('delay', PropertyTypeEnum.Number),
    new PropertyType('interval', PropertyTypeEnum.Number)
  ], '');

  public properties = {
    delay: 200/* ms */,
    interval: 500/* ms */,
  };
  public graphInputs = [];

  public runner = () => {
    return timer(this.properties.delay, this.properties.interval);
  }
  public toString = () => {
    return `timer(${this.properties.delay}, ${this.properties.interval})`;
  }
}
