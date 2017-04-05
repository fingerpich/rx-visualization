import {Observable} from "rxjs/Rx";

export class Map {
  public static title = "Map";
  public static link = "http://reactivex.io/documentation/operators/map.html";
  public static desc = "transform the items emitted by an Observable by applying a function to each item";

  public runner = () => {
    return this.graphInputs[0].map(Map.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [{fi: 'function',types:[
    {name:"2x",func:(x)=>{return x*2;},text:"(x)=>{return x*2;}"},
    {name:"x2",func:(x)=>{return x*x;},text:"(x)=>{return x*x;}"},
    {name:"x3",func:(x)=>{return x*x*x;},text:"(x)=>{return x*x*x;}"},
    {name:"x+hello",func:(x)=>{return x+' hello';},text:"(x)=>{return x+' hello';}"},
  ]}];
  public properties = {
    fi: 0,
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public commandMaker = () => {
    return '.map(' +Map.propertiesType[0].types[this.properties.fi].func + ')';
  }
}
