import { delay } from 'rxjs/operators';
import {RxNode} from './rxNode';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';

export class Delay extends RxNode {
  protected static title = 'Delay';
  protected static desc = 'shift the emissions from an Observable forward in time by a particular amount';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('delay', PropertyTypeEnum.Number);

  public properties = {
    delay: 1000
  };
  public graphInputs = [];

  public runner = ({}) => {
    return this.graphInputs[0].observable.pipe(delay(this.properties.delay));
  }
  public toString = ({}) => {
    return `.pipe(delay(${this.properties.delay}))`;
  }
}
