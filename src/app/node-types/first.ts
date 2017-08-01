import {RxNode} from './rxNode';
import {SampleFunctions} from './sample-functions';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';

export class First extends RxNode {
  protected static title = 'First';
  protected static link = 'http://reactivex.io/documentation/operators/first.html';
  protected static desc = 'transform the items emitted by an Observable by applying a function to each item';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('filter' , PropertyTypeEnum.Method, [
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
    return this.graphInputs[0].observable.first(First.propertiesType.params[this.properties.filter].func);
  }
  public toString = () => {
    return '.first(' + First.propertiesType.params[this.properties.filter].text + ')';
  }
}
