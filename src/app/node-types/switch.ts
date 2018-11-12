import {RxNode} from './rxNode';
export class Switch extends RxNode {
  protected static title = 'Switch';
  protected static desc = 'convert an Observable that emits Observables into a single Observable that emits the items' +
    ' emitted by the most-recently-emitted of those Observables';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;


  public properties = {};
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.switch();
  }
  public toString = () => {
    return '.switch()';
  }
}
