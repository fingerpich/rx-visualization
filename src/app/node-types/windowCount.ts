import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {windowCount} from 'rxjs/operators';

export class WindowCount extends RxNode {
  protected static title = 'WindowCount';
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
    return this.graphInputs[0].observable.pipe(windowCount(count, skip));
  }
  public toString = () => {
    const {count, skip} = this.properties;
    return `.pipe(windowCount(${count}, ${skip}))`;
  }
}
