import {Observable} from "rxjs/Rx";

export class Last {
  public static title = "Last";
  public static link = "http://reactivex.io/documentation/operators/last.html";
  public static desc = "emit only the last item (or the last item that meets some condition) emitted by an Observable";

  public runner = () => {
    return this.graphInputs[0].last(Last.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [{
    fi: 'function', types: [
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
  public properties = {
    fi: 0,
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public commandMaker = () => {
    return '.last(' + Last.propertiesType[0].types[this.properties.fi].func + ')';
  }
}
