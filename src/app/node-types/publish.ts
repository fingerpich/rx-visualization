import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";

export class Publish extends RxNode {
  protected static title = "Publish";
  protected static link = "http://reactivex.io/documentation/operators/publish.html";
  protected static desc = "convert an ordinary Observable into a connectable Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [];

  public runner = () => {
    return this.graphInputs[0].publish();
  };
  public toString = () => {
    return '.publish()';
  };

  public properties = {};
  public graphInputs = [];

}
