import {Observable} from "rxjs/Rx";

export class Timeout {
  public static title = "Timeout";
  public static link = "http://reactivex.io/documentation/operators/timeout.html";
  public static desc = "mirror the source Observable, but issue an error notification if a particular period of time elapses without any emitted items";

  public runner = () => {
    return this.graphInputs[0].timeout(
      this.properties.time,
      Timeout.propertiesType[1].types[this.properties.fi].func,
    )
  };

  private static propertiesType = [
    {fi: 'function',types:[
      {name:"text",func:'Timeout has occurred.',text:'Timeout has occurred.'},
      {name:"promise",func:()=>{},text:"()=>{Observable.timer(0)}"},
    ]},
    {time:'Number',types:null},
  ];
  public properties = {
    fi: 0,
    time: 1000,
  };

  public graphInputs = [];
  public static maxInput = 2;
  public static minInput = 2;

  public commandMaker = () => {
    return '.timeout('+this.properties.time+', '+  Timeout.propertiesType[1].types[this.properties.fi].text+')';
  }
}
