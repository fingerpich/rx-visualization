import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';
import {filter} from 'rxjs/operators';

export class Filter extends RxNode {
  protected static title = 'Filter';
  protected static desc = 'transform the items emitted by an Observable by applying a function to each item';
  protected static maxInput = 1;
  protected static minInput = 1;
  protected static propertiesType = new PropertyType('filter', PropertyTypeEnum.Method, [
    SampleFunctions.EVEN,
    SampleFunctions.ODD,
    SampleFunctions.ALL,
    SampleFunctions.GT6,
  ], '');

  public properties = {
    filter: 0,
  };
  public graphInputs = [];
  public runner = () => {
    return this.graphInputs[0].observable.pipe(filter(Filter.propertiesType.params[this.properties.filter].func));
  }
  public toString = () => {
    return `.pipe(filter(${Filter.propertiesType.params[this.properties.filter].text}))`;
  }
}
