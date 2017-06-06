import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';
export class All extends RxNode {
  protected static title = 'All';
  protected static link = 'http://reactivex.io/documentation/operators/all.html';
  protected static desc = 'determine whether all items emitted by an Observable meet some criteria';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('filterCondition', PropertyTypeEnum.Method, [
    SampleFunctions.GT6
  ], '');

  public properties = {
    filterCondition: 0,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].every(All.propertiesType.params[this.properties.filterCondition].func);
  }
  public toString = () => {
    return '.every(' + All.propertiesType.params[this.properties.filterCondition].text + ')';
  }
}
