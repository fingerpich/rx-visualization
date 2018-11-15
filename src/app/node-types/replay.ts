import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';
import {shareReplay} from 'rxjs/operators';

export class Replay extends RxNode {
  protected static title = 'Replay';
  protected static desc = 'Ensure that all observers see the same sequence of emitted items, ' +
    'even if they subscribe after the Observable has begun emitting items';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('object', PropertyTypeEnum.Object, [
    new PropertyType('bufferSize', PropertyTypeEnum.Number, null, 'the maximum number of items to buffer' +
      ' and replay to subsequent observers'),
    new PropertyType('window', PropertyTypeEnum.Number, null, 'the maximum number of items to buffer and ' +
      'replay to subsequent observers'),
    new PropertyType('scheduler', PropertyTypeEnum.Number, null, 'the Scheduler on which this operator will operate'),
  ], '');

  public properties = {
    transFunc: 0,
    bufferSize: 2,
    window: null,
    scheduler: null
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(shareReplay(
      this.properties.bufferSize, this.properties.window, this.properties.scheduler));
  }
  public toString = () => {
    return `.pipe(replay(${this.properties.bufferSize}, ${this.properties.window}, ${this.properties.scheduler}))`;
  }
}
