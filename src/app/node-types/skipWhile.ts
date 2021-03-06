import {RxNode} from './rxNode';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';
import {SampleFunctions} from './sample-functions';
import {skipWhile} from 'rxjs/operators';

export class SkipWhile extends RxNode {
  protected static title = 'SkipWhile';
  protected static desc = 'discard items emitted by an Observable until a specified condition becomes false';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('whileFilter', PropertyTypeEnum.Method, [
    SampleFunctions.ST6,
    SampleFunctions.ALL,
    SampleFunctions.GT6,
  ], '');

  public properties = {
    whileFilter: 0,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(skipWhile(SkipWhile.propertiesType.params[this.properties.whileFilter].func));
  }
  public toString = () => {
    return `.pipe(skipWhile(${SkipWhile.propertiesType.params[this.properties.whileFilter].text}))`;
  }
}
