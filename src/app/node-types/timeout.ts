import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';
import {timeout} from 'rxjs/operators';

export class Timeout extends RxNode {
  protected static title = 'Timeout';
  protected static desc = 'mirror the source Observable, but issue an error notification if a particular' +
    ' period of time elapses without any emitted items';
  protected static maxInput = 2;
  protected static minInput = 2;

  protected static propertiesType = new PropertyType('object', PropertyTypeEnum.Object, [
    new PropertyType('time', PropertyTypeEnum.Number),
  ], '');

  public properties = {
    time: 1000,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(timeout(
      this.properties.time
    ));
  }
  public toString = () => {
    return `.pipe(timeout(${this.properties.time}))`;
  }
}
