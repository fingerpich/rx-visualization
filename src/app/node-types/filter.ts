import {Observable} from "rxjs/Rx";

export class Filter {
  public static title = "Filter";
  public static link = "http://reactivex.io/documentation/operators/filter.html";
  public static desc = "transform the items emitted by an Observable by applying a function to each item";

  public runner = () => {
    return this.graphInputs[0].filter(Filter.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [{
    name: "fi", type: 'function', types: [
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

  public toString = () => {
    return '.filter(' + Filter.propertiesType[0].types[this.properties.fi].text + ')';
  }
}
