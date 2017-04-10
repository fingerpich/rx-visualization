import {RxNode} from "./rxNode";
export class All extends RxNode{
  protected static title = "All";
  protected static link = "http://reactivex.io/documentation/operators/all.html";
  protected static desc = "determine whether all items emitted by an Observable meet some criteria";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{
    name: "fi", type: 'function', types: [
      {
        name: "GT6", func: (x) => {
        return x > 6;
      }, text: "(x)=>{return x > 6;}"
      },
    ]
  }];

  public runner = () => {
    return this.graphInputs[0].every(All.propertiesType[0].types[this.properties.fi].func);
  };
  public toString = () => {
    return '.every(' + All.propertiesType[0].types[this.properties.fi].text + ')';
  };



  public properties = {
    fi: 0,
  };
  public graphInputs = [];
}
