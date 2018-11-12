import { debounce } from 'rxjs/operators';
import { timer } from 'rxjs';
import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';

export class Debounce extends RxNode {
  protected static title = 'Debounce';
  protected static desc = 'only emit an item from an Observable if a particular timespan has passed without it emitting another item';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('debounceTime', PropertyTypeEnum.Number);

  public properties = {
    debounceTime: 500 /* ms */
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(debounce(() => timer(this.properties.debounceTime)));
  }
  public toString = () => {
    return `.pipe(debounce(() => timer(${this.properties.debounceTime})))`;
  }
}
