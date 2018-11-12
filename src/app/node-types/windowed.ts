import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';

export class Windowed extends RxNode {
  protected static title = 'Windowed';
  protected static desc = 'allows the ControlledObservable to run somewhat ahead of the observer from time to time';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('debounceTime', PropertyTypeEnum.Number);

  public properties = {
    time: 50
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.windowed(this.properties.time);
  }
  public toString = () => {
    return '.debounce(' + this.properties.time + ')';
  }
}
