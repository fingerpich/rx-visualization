import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';
export class Contains extends RxNode {
  protected static title = 'Contains';
  protected static link = 'http://reactivex.io/documentation/operators/contains.html';
  protected static desc = 'emit only item n emitted by an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('item', PropertyTypeEnum.String);

  public properties = {
    item: 0,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.contains(this.properties.item);
  }
  public toString = () => {
    return '.contains(' + this.properties.item + ')';
  }



}
