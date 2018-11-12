import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';

export class TakeLast extends RxNode {
  protected static title = 'TakeLast';
  protected static desc = 'emit only the final n items emitted by an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('itemCount', PropertyTypeEnum.Number);

  public properties = {
    itemCount: 2
  };
  public graphInputs = [];

  public runner = ({}) => {
    return this.graphInputs[0].observable.takeLast(this.properties.itemCount);
  }
  public toString = ({}) => {
    return '.takeLast(' + this.properties.itemCount + '))';
  }
}
