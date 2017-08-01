import {RxNode} from './rxNode';
export class Average extends RxNode {
  protected static title = 'Average';
  protected static link = 'http://reactivex.io/documentation/operators/average.html';
  protected static desc = 'discard items emitted by an Observable after a specified condition becomes false';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.average();
  }
  public toString = () => {
    return '.average()';
  }
}
