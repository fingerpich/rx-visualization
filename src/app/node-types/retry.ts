import {RxNode} from './rxNode';
import {PropertyTypeEnum} from './propertyType.enum';
import {PropertyType} from './property-type';
import 'rxjs/add/operator/retry';


export class Retry extends RxNode {
  protected static title = 'Retry';
  protected static link = 'http://reactivex.io/documentation/operators/retry.html';
  protected static desc = 'If a source Observable sends an onError notification, resubscribe to it in ' +
    'the hopes that it will complete without error';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('retryCount', PropertyTypeEnum.Number);

  public properties = {
    retryCount: 3
  };
  public graphInputs = [];

  public runner = ({retryCount}) => {
    return this.graphInputs[0].observable.retry(retryCount);
  }
  public toString = ({}) => {
    return '.retry(' + this.properties.retryCount + ');';
  }
}
