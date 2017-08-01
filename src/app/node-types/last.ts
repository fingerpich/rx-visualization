import {Observable} from 'rxjs/Rx';
import {RxNode} from './rxNode';
import {SampleFunctions} from './sample-functions';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';

export class Last extends RxNode {
  protected static title = 'Last';
  protected static link = 'http://reactivex.io/documentation/operators/last.html';
  protected static desc = 'emit only the last item (or the last item that meets some condition) emitted by an Observable';
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
    return this.graphInputs[0].observable.last(Last.propertiesType.params[this.properties.filter].func);
  }
  public toString = () => {
    return '.last(' + Last.propertiesType.params[this.properties.filter].text + ')';
  }
}
