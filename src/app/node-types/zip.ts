import {Observable} from 'rxjs/Rx';
import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';

export class Zip extends RxNode {
  protected static title = 'Zip';
  protected static link = 'http://reactivex.io/documentation/operators/zip.html';
  protected static desc = 'combine the emissions of multiple Observables together via a specified function and emit ' +
    'single items for each combination based on the results of this function';
  protected static maxInput = 300;
  protected static minInput = 2;

  protected static propertiesType = new PropertyType('zipFunction', PropertyTypeEnum.Method, [
    SampleFunctions.ZIP1,
  ], '');

  public properties = {
    fi: 0
  };
  public graphInputs = [];

  public runner = ({}) => {
    return Observable.zip(...this.graphInputs.map(gi => gi.observable), Zip.propertiesType.params[this.properties.fi].func);
  }
  public toString = ({}) => {
    return 'Observable.zip(' +
      this.graphInputs.map(gi => gi.node.data.title).join(',') + ', ' +
      Zip.propertiesType.params[this.properties.fi].text + ')';
  }
}
