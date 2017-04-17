import {RxNode} from "./rxNode";
export class TakeUntil extends RxNode {
  protected static title = "TakeUntil";
  protected static link = "http://reactivex.io/documentation/operators/TakeUntil.html";
  protected static desc = "discard any items emitted by an Observable after a second Observable emits an item or terminates";
  protected static maxInput = 2;
  protected static minInput = 2;

  protected static propertiesType = null;

  public runner = () => {
    return this.graphInputs[0].takeUntil(
      this.graphInputs[1]/* the second observable connected to this block */,
    );
  };
  public toString = () => {
    return '.takeUntil(' + TakeUntil.propertiesType[0].types[this.properties.fi].text + ')';
  };


  public properties = {
    fi: 0,
  };
  public graphInputs = [];
}
