import {RxNode} from "./rxNode";
export class Map extends RxNode {
  protected static title = "Map";
  protected static link = "http://reactivex.io/documentation/operators/map.html";
  protected static desc = "transform the items emitted by an Observable by applying a function to each item";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{name:"fi",type: 'function',types:[
    {name:"2x",func:(x)=>{return x*2;},text:"(x)=>{return x*2;}"},
    {name:"x2",func:(x)=>{return x*x;},text:"(x)=>{return x*x;}"},
    {name:"x3",func:(x)=>{return x*x*x;},text:"(x)=>{return x*x*x;}"},
    {name:"x+hello",func:(x)=>{return x+' hello';},text:"(x)=>{return x+' hello';}"},
  ]}];

  public runner = () => {
    return this.graphInputs[0].map(Map.propertiesType[0].types[this.properties.fi].func);
  };
  public toString = () => {
    return '.map(' +Map.propertiesType[0].types[this.properties.fi].text + ')';
  };


  public properties = {
    fi: 0,
  };
  public graphInputs = [];
}
