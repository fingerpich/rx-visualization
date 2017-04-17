
import {RxNode} from "./rxNode";
export class SequenceEqual extends RxNode {
  protected static title = "SequenceEqual";
  protected static link = "http://reactivex.io/documentation/operators/sequenceEqual.html";
  protected static desc = "determine whether two Observables emit the same sequence of items";
  protected static maxInput = 2;
  protected static minInput = 2;

  protected static propertiesType = null;

  public runner = () => {
    return this.graphInputs[0].sequenceEqual(
      this.graphInputs[1]/* the second observable connected to this block */,
    )
  };
  public toString = ({}) => {
    return '.join('+this.graphInputs[1].toString()+')';
  };


  public properties = {};
  public graphInputs = [];
}
