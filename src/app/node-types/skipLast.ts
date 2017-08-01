import {RxNode} from './rxNode';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';
export class SkipLast extends RxNode {
  protected static title = 'SkipLast';
  protected static link = 'http://reactivex.io/documentation/operators/skiplast.html';
  protected static desc = 'Suppress the final n items emitted by an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('itemCount', PropertyTypeEnum.Number);

  public properties = {
    itemCount: 2
  };
  public graphInputs = [];

  public runner = ({}) => {
    return this.graphInputs[0].observable.skipLast(this.properties.itemCount);
  }
  public toString = ({}) => {
    return '.skipLast(' + this.properties.itemCount + '))';
  }
}
