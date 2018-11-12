import {tap} from 'rxjs/operators/';
import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';

export class Do extends RxNode {
  protected static title = 'Do';
  protected static desc = 'register an action to take upon a variety of Observable lifecycle events';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('action', PropertyTypeEnum.Method, [
    SampleFunctions.X2,
    SampleFunctions.X3,
  ], '');

  public properties = {
    action: 0,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(tap(Do.propertiesType.params[this.properties.action].func));
  }
  public toString = () => {
    return `.pipe(tap(${Do.propertiesType.params[this.properties.action].text}))`;
  }
}
