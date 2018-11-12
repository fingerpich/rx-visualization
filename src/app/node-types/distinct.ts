import {RxNode} from './rxNode';
import { distinct } from 'rxjs/operators';

export class Distinct extends RxNode {
  protected static title = 'Distinct';
  protected static desc = 'suppress duplicate items emitted by an Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.pipe(distinct());
  }
  public toString = () => {
    return `.pipe(distinct())`;
  }
}
