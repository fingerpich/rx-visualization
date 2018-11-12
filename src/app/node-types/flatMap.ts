import {RxNode} from './rxNode';
import {SampleFunctions} from './sample-functions';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';
import {flatMap} from 'rxjs/operators';

export class FlatMap extends RxNode {
  protected static title = 'FlatMap';
  protected static desc = 'transform the items emitted by an Observable into Observables,' +
    ' then flatten the emissions from those into a single Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('observabler', PropertyTypeEnum.Method, [
    SampleFunctions.RANGE2,
    SampleFunctions.RANGE3,
    SampleFunctions.RANGE5,
  ], '');

  public properties = {
    observabler: 0
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(flatMap(FlatMap.propertiesType.params[this.properties.observabler].func));
  }
  public toString = () => {
    return '.flatMap(' + FlatMap.propertiesType.params[this.properties.observabler].text + ')';
  }
}
