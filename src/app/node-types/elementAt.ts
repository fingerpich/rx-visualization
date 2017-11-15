import {RxNode} from './rxNode';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';
import 'rxjs/add/operator/elementAt';

export class ElementAt extends RxNode {
  protected static title = 'ElementAt';
  protected static link = 'http://reactivex.io/documentation/operators/elementat.html';
  protected static desc = 'emit only item n emitted by an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('index', PropertyTypeEnum.Number);

  public properties = {
    index:2,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.elementAt(this.properties.index);
  }
  public toString = () => {
    return '.elementAt(' + this.properties.index + ')';
  }
}
