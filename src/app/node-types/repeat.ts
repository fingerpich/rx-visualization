import {RxNode} from './rxNode';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';
import {repeat} from 'rxjs/operators';

export class Repeat extends RxNode {
  protected static title = 'Repeat';
  protected static desc = 'create an Observable that emits a particular item multiple times';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('object', PropertyTypeEnum.Object, [
    new PropertyType('count', PropertyTypeEnum.Number)
  ], '');

  public properties = {
    count: 3
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(repeat(this.properties.count));
  }
  public toString = () => {
    return `.pipe(repeat(${this.properties.count}))`;
  }
}
