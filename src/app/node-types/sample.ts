import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import 'rxjs/add/operator/sample';

export class Sample extends RxNode {
  protected static title = 'Sample';
  protected static link = 'http://reactivex.io/documentation/operators/sample.html';
  protected static desc = 'emit the most recent items emitted by an Observable within periodic time intervals';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('periodicTimeIntervals', PropertyTypeEnum.Number);

  public properties = {
    periodicTimeIntervals: 1000
  };
  public graphInputs = [];

  public runner = ({}) => {
    return this.graphInputs[0].observable.sample(this.properties.periodicTimeIntervals);
  }
  public toString = ({}) => {
    return '.sample(' + this.properties.periodicTimeIntervals + '))';
  }

}
