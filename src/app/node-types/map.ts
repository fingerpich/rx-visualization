import {RxNode} from './rxNode';
import {SampleFunctions} from './sample-functions';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';
import {map} from 'rxjs/operators';

export class Map extends RxNode {
  protected static title = 'Map';
  protected static desc = 'transform the items emitted by an Observable by applying a function to each item';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('mapFunc', PropertyTypeEnum.Method, [
    SampleFunctions.X2,
    SampleFunctions.Xpoint2,
    SampleFunctions.X3,
    SampleFunctions.HELLOX,
  ], '');

  public properties = {
    mapFunc: 0,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(map(Map.propertiesType.params[this.properties.mapFunc].func));
  }
  public toString = () => {
    return `.pipe(map(${Map.propertiesType.params[this.properties.mapFunc].text})`;
  }
}
