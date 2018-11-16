import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {skip} from 'rxjs/operators';

export class Skip extends RxNode {
  protected static title = 'Skip';
  protected static desc = 'suppress the first n items emitted by an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('itemCount', PropertyTypeEnum.Number);

  public properties = {
    itemCount: 2
  };
  public graphInputs = [];

  public runner = ({}) => {
    return this.graphInputs[0].observable.pipe(skip(this.properties.itemCount));
  }
  public toString = ({}) => {
    return `.skip(${this.properties.itemCount}))`;
  }
}
