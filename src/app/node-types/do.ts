import {Observer} from "rxjs";
import {RxNode} from "./rxNode";
import {PropertyType} from "./property-type";
import {PropertyTypeEnum} from "./propertyType.enum";
import {SampleFunctions} from "./sample-functions";

export class Do extends RxNode {
  protected static title = "Do";
  protected static link = "http://reactivex.io/documentation/operators/do.html";
  protected static desc = "register an action to take upon a variety of Observable lifecycle events";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType("action",PropertyTypeEnum.Method,[
    SampleFunctions.X2,
    SampleFunctions.X3,
  ],'');

  public runner = () => {
    return this.graphInputs[0].do(Do.propertiesType[0].types[this.properties.action].func);
  };
  public toString = () => {
    return '.do(' + Do.propertiesType[0].types[this.properties.action].text + ')';
  };


  public properties = {
    action: 0,
  };
  public graphInputs = [];
}
