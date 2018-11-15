import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {sample} from 'rxjs/operators';
import {timer} from 'rxjs';

export class Sample extends RxNode {
  protected static title = 'Sample';
  protected static desc = 'emit the most recent items emitted by an Observable within periodic time intervals';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('periodicTimeIntervals', PropertyTypeEnum.Number);

  public properties = {
    periodicTimeIntervals: 1000
  };
  public graphInputs = [];

  public runner = ({}) => {
    return this.graphInputs[0].observable.pipe(sample(timer(this.properties.periodicTimeIntervals)));
  }
  public toString = ({}) => {
    return `.pipe(sample(timer(${this.properties.periodicTimeIntervals})))`;
  }
}
