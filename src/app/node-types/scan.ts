import {RxNode} from "./rxNode";
export class Scan extends RxNode {
  protected static title = "scan";
  protected static link = "http://reactivex.io/documentation/operators/scan.html";
  protected static desc = "apply a function to each item emitted by an Observable, sequentially, and emit each successive value";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{name:"fi",type: 'function',types:[
    {name:"sum",func:(acc, x) => { return acc + x; },text:"(acc, x) => { return acc + x; }"},
    {name:"time",func:(acc, x) => { return acc * x; },text:"(acc, x) => { return acc * x; }"},
  ]}];

  public runner = () => {
    return this.graphInputs[0].map(Scan.propertiesType[0].types[this.properties.fi].func);
  };
  public toString = () => {
    return '.scan(' + Scan.propertiesType[0].types[this.properties.fi].text + ')';
  };


  public properties = {
    fi: 0,
  };
  public graphInputs = [];
}
