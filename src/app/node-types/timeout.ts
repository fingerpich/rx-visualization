import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";

export class Timeout extends RxNode {
  protected static title = "Timeout";
  protected static link = "http://reactivex.io/documentation/operators/timeout.html";
  protected static desc = "mirror the source Observable, but issue an error notification if a particular period of time elapses without any emitted items";
  protected static maxInput = 2;
  protected static minInput = 2;

  protected static propertiesType = [
    {name:"fi",type: 'function',types:[
      {name:"text",func:'Timeout has occurred.',text:'Timeout has occurred.'},
      {name:"promise",func:()=>{},text:"()=>{Observable.timer(0)}"},
    ]},
    {time:'number',types:null},
  ];

  public runner = () => {
    return this.graphInputs[0].timeout(
      this.properties.time,
      Timeout.propertiesType[1].types[this.properties.fi].func,
    )
  };
  public toString = () => {
    return '.timeout('+this.properties.time+', '+  Timeout.propertiesType[1].types[this.properties.fi].text+')';
  };


  public properties = {
    fi: 0,
    time: 1000,
  };
  public graphInputs = [];
}
