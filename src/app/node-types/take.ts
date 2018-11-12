import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';

export class Take extends RxNode {
  protected static title = 'Take';
  protected static desc = 'emit only the first n items emitted by an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('itemCount', PropertyTypeEnum.Number);

  public properties = {
    itemCount: 2
  };
  public graphInputs = [];

  public runner = ({}) => {
    return this.graphInputs[0].observable.take(this.properties.itemCount);
  }
  public toString = ({}) => {
    return '.take(' + this.properties.itemCount + '))';
  }
}
