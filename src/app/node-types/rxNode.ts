export class RxNode {
  protected static title="a";
  protected static link ="a";
  protected static desc ="s";
  protected static maxInput = 0;
  protected static minInput = 0;

  protected static propertiesType =[{}];

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
  get propertiesType():Array<Object> {
    return (<typeof RxNode>this.constructor).propertiesType;
  }

  public properties : Object;
  public graphInputs : Array<Object>;
}
