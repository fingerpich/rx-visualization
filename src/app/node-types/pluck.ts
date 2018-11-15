import {RxNode} from './rxNode';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';
import {pluck} from 'rxjs/operators';

export class Pluck extends RxNode {
  protected static title = 'Pluck';
  protected static desc = 'It transforms the elements emitted by the source Observable by ' +
    'extracting a single named property from those elements and emitting that property in their place';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('propName', PropertyTypeEnum.String);

  public properties = {
    propName: 'x'
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(pluck(this.properties.propName));
  }
  public toString = () => {
    return `.pipe(pluck(${this.properties.propName}))`;
  }
}
