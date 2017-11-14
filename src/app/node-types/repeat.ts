import {RxNode} from './rxNode';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';

export class Repeat extends RxNode {
  protected static title = 'Repeat';
  protected static link = 'http://reactivex.io/documentation/operators/repeat.html';
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
    return this.graphInputs[0].observable.repeat(this.properties.count);
  }
  public toString = () => {
    return '.repeat(' + this.properties.count + ')';
  }
}
