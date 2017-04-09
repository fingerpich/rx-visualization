import {Observable} from "rxjs/Rx";

export class Last {
  protected static title = "Last";
  protected static link = "http://reactivex.io/documentation/operators/last.html";
  protected static desc = "emit only the last item (or the last item that meets some condition) emitted by an Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected  static propertiesType = [{
    name:"fi",type: 'function', types: [
      {
        name: "even", func: (x, idx, obs) => {
        return x % 2 === 0;
      }, text: "(x, idx, obs)=>{return x % 2 === 0;}"
      },
      {
        name: "odd", func: (x, idx, obs) => {
        return x % 2 === 1;
      }, text: "(x, idx, obs)=>{return x % 2 === 1;}"
      },
    ]
  }];

  public runner = () => {
    return this.graphInputs[0].last(Last.propertiesType[0].types[this.properties.fi].func);
  };
  public toString = () => {
    return '.last(' + Last.propertiesType[0].types[this.properties.fi].text + ')';
  };


  public properties = {
    fi: 0,
  };
  public graphInputs = [];
}
