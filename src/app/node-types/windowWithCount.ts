
import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
export class WindowWithCount extends RxNode {
  protected static title = 'WindowWithCount';
  protected static link = 'http://reactivex.io/documentation/operators/window.html';
  protected static desc = 'periodically subdivide items from an Observable into Observable windows and emit these' +
    ' windows rather than emitting the items one at a time';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('object', PropertyTypeEnum.Object, [
    new PropertyType('count', PropertyTypeEnum.Number),
    new PropertyType('skip', PropertyTypeEnum.Number)
  ], '');

  public properties = {
    count: 3,
    skip: 2
  };
  public graphInputs = [];

  public runner = ({count, skip}) => {
    return this.graphInputs[0].windowWithCount(count, skip);
  }
  public toString = () => {
    const {count, skip} = this.properties;
    return '.windowWithCount(' + count + ', ' + skip + ')';
  }
}
