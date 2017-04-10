import {RxNode} from "./rxNode";
export class SkipLast extends RxNode {
  protected static title = "SkipLast";
  protected static link = "http://reactivex.io/documentation/operators/skiplast.html";
  protected static desc = "suppress the final n items emitted by an Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{name:"itemCount",type: "number"}];

  public runner = ({}) => {
    return this.graphInputs[0].skipLast(this.properties.itemCount);
  };
  public toString = ({}) => {
    return '.skipLast(' + this.properties.itemCount + '))';
  };


  public properties = {
    itemCount: 2
  };
  public graphInputs = [];
}
