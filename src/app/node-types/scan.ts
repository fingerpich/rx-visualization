import {RxNode} from "./rxNode";
import {PropertyType} from "./property-type";
import {PropertyTypeEnum} from "./propertyType.enum";
import {SampleFunctions} from "./sample-functions";
export class Scan extends RxNode {
  protected static title = "scan";
  protected static link = "http://reactivex.io/documentation/operators/scan.html";
  protected static desc = "apply a function to each item emitted by an Observable, sequentially, and emit each successive value";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType("scanFunc",PropertyTypeEnum.Method,[
    SampleFunctions.SCAN_SUM,
    SampleFunctions.SCAN_TIME,
  ],'');

  public runner = () => {
    return this.graphInputs[0].map(Scan.propertiesType[0].types[this.properties.scanFunc].func);
  };
  public toString = () => {
    return '.scan(' + Scan.propertiesType[0].types[this.properties.scanFunc].text + ')';
  };


  public properties = {
    scanFunc: 0,
  };
  public graphInputs = [];
}
