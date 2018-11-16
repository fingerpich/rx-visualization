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

  protected static propertiesType = new PropertyType('scanFunc', PropertyTypeEnum.Method, [
    SampleFunctions.SCAN_SUM,
    SampleFunctions.SCAN_TIME,
  ], '');

  public properties = {
    scanFunc: 0,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(scan(Scan.propertiesType.params[this.properties.scanFunc].func));
  }
  public toString = () => {
    return `.scan(${Scan.propertiesType.params[this.properties.scanFunc].text})`;
  }
}
