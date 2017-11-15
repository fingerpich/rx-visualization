import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';
import 'rxjs/add/operator/timeout';

export class Timeout extends RxNode {
  protected static title = 'Timeout';
  protected static link = 'http://reactivex.io/documentation/operators/timeout.html';
  protected static desc = 'mirror the source Observable, but issue an error notification if a particular' +
    ' period of time elapses without any emitted items';
  protected static maxInput = 2;
  protected static minInput = 2;

  protected static propertiesType = new PropertyType('object', PropertyTypeEnum.Object, [
    new PropertyType('time', PropertyTypeEnum.Number),
    new PropertyType('timeoutResult', PropertyTypeEnum.String)
  ], '');

  public properties = {
    timeoutResult: 'Timeout has occurred.',
    time: 1000,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.timeout(
      this.properties.time,
      this.properties.timeoutResult,
    );
  }
  public toString = () => {
    return '.timeout(' + this.properties.time + ', ' +  this.properties.timeoutResult + ')';
  }
}
