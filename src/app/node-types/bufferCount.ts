import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';

export class BufferCount extends RxNode {
  protected static title = 'BufferCount';
  protected static link = 'http://reactivex.io/documentation/operators/buffer.html';
  protected static desc = 'periodically gather items from an Observable into bundles and ' +
    'emit these bundles rather than emitting the items one at a time';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('parameters', PropertyTypeEnum.Object, [
      new PropertyType('count', PropertyTypeEnum.Number),
      new PropertyType('skip', PropertyTypeEnum.Number)
    ], '');

  public properties = {
    count: 3,
    skip: 2
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].bufferCount(this.properties.count, this.properties.skip);
  }

  public toString = () => {
    return '.bufferCount(' + this.properties.count + ', ' + this.properties.skip + ')';
  }
}
