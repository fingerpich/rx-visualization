import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';
import {scan} from 'rxjs/operators';

export class Scan extends RxNode {
  protected static title = 'Scan';
  protected static desc = 'Apply a function to each item emitted by an Observable, sequentially, and emit each successive value';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('', PropertyTypeEnum.Object, [
    new PropertyType('accumulator', PropertyTypeEnum.Method, [
      SampleFunctions.SCAN_SUM,
      SampleFunctions.SCAN_Multiply,
    ], ''),
    new PropertyType('seed', PropertyTypeEnum.Number)
  ], '');

  public properties = {
    accumulator: 0,
    seed: 0,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(scan(Scan.propertiesType.params[0].params[this.properties.accumulator].func, this.properties.seed));
  }
  public toString = () => {
    return `.scan(${Scan.propertiesType.params[0].params[this.properties.accumulator].text}, ${this.properties.seed})`;
  }
}
