import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";
import {PropertyType} from "./property-type";
import {PropertyTypeEnum} from "./propertyType.enum";

export class TakeLast extends RxNode {
  protected static title = "TakeLast";
  protected static link = "http://reactivex.io/documentation/operators/takelast.html";
  protected static desc = "emit only the final n items emitted by an Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType("itemCount",PropertyTypeEnum.Number);

  public runner = ({}) => {
    return this.graphInputs[0].takeLast(this.properties.itemCount);
  };
  public toString = ({}) => {
    return '.takeLast(' + this.properties.itemCount + '))';
  };


  public properties = {
    itemCount: 2
  };
  public graphInputs = [];
}
