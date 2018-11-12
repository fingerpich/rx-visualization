import {interval} from 'rxjs';
import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';

export class Interval extends RxNode {
  protected static title = 'Interval';
  protected static desc = 'create an Observable that emits a sequence of integers spaced by a given time interval';
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = new PropertyType('interval', PropertyTypeEnum.Number);

  public properties = {
    interval: 500/* ms */,
  };
  public graphInputs = [];

  public runner = () => {
    return interval(this.properties.interval);
  }

  public toString = () => {
    return `interval(${this.properties.interval})`;
  }
}
