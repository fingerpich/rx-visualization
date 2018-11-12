import {RxNode} from './rxNode';
export class Sum extends RxNode {
  protected static title = 'Sum';
  protected static desc = 'calculates the sum of numbers emitted by an Observable and emits this sum';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.sum();
  }
  public toString = () => {
    return '.sum()';
  }
}
