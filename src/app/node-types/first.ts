import {Observable} from "rxjs/Rx";

export class First {
  public static title = "First";
  public static link = "http://reactivex.io/documentation/operators/first.html";
  public static desc = "transform the items emitted by an Observable by applying a function to each item";

  public runner = () => {
    return this.graphInputs[0].first(First.propertiesType[0].types[this.properties.fi].func);
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
    return '.first(' + First.propertiesType[0].types[this.properties.fi].text + ')';
  }
}
