import {PropertyType} from "./property-type";

export class RxNode {
  protected static title : string;
  protected static link : string;
  protected static desc : string;
  protected static maxInput : Number;
  protected static minInput : Number;

  protected static propertiesType :PropertyType;

  get title():string {
    return (<typeof RxNode>this.constructor).title;
  }
  get maxInput():Number {
    return (<typeof RxNode>this.constructor).maxInput;
  }
  get minInput():Number {
    return (<typeof RxNode>this.constructor).minInput;
  }
  get link():string { return (<typeof RxNode>this.constructor).link; }
  get desc():string { return (<typeof RxNode>this.constructor).desc; }
  get propertiesType():PropertyType {
    return (<typeof RxNode>this.constructor).propertiesType;
  }

  public properties : Object;
  public graphInputs : Array<Object>;
}
