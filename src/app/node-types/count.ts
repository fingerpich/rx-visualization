import {RxNode} from "./rxNode";
import {SampleFunctions} from "./sample-functions";
import {PropertyTypeEnum} from "./propertyType.enum";
import {PropertyType} from "./property-type";
export class Count extends RxNode {
  protected static title = "Average";
  protected static link = "http://reactivex.io/documentation/operators/Count.html";
  protected static desc = "count the number of items emitted by the source Observable and emit only this value";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType("filterFunc",PropertyTypeEnum.Method,[
    SampleFunctions.ALL,
    SampleFunctions.GT6
  ],'');

  public runner = () => {
    return this.graphInputs[0].count(Count.propertiesType[0].types[this.properties.filterFunc].func);
  };
  public toString = () => {
    return '.count(' + Count.propertiesType[0].types[this.properties.filterFunc].text + ')';
  };


  public properties = {
    filterFunc: 0
  };
  public graphInputs = [];
}