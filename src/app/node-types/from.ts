import {from, of} from 'rxjs';
import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';

export class From extends RxNode {
  protected static title = 'From';
  protected static desc = 'convert various other objects and data types into Observables';
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType = new PropertyType('list', PropertyTypeEnum.List,
    new PropertyType('number', PropertyTypeEnum.Number)
    , '');

  public properties = {
    list: [
      1, 2
    ]
  };
  public graphInputs = [];

  public runner = () => {
    return from(of(this.properties.list));
  }
  public toString = () => {
    return `from(${this.properties.list.join(',')})`;
  }
}
