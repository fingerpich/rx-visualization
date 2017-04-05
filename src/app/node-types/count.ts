import {Observable} from "rxjs/Rx";

export class Count {
  public static title = "Average";
  public static link = "http://reactivex.io/documentation/operators/Count.html";
  public static desc = "count the number of items emitted by the source Observable and emit only this value";

  public runner = () => {
    return this.graphInputs[0].count(Count.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [
    {fi: 'function',types:[
      {name:"all",func:()=>true,text:'()=>true'},
      {name:"gt6",func:x=>x>6,text:"x=>x>6"},
    ]},
  ];
  public properties = {
    fi:0
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = () => {
    return '.count('+Count.propertiesType[0].types[this.properties.fi].text+')';
  }
}
