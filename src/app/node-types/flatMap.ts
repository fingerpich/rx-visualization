import {Observable} from "rxjs/Rx";

export class FlatMap {
  public static title = "FlatMap";
  public static link = "http://reactivex.io/documentation/operators/flatmap.html";
  public static desc = "transform the items emitted by an Observable into Observables, then flatten the emissions from those into a single Observable";

  public runner = () => {
    return this.graphInputs[0].flatMap(FlatMap.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [{
    name: "fi", type: 'function', types: [
      {
        name: "x,x+1", func: (x) => {
        return Observable.range(x, 2);
      }, text: "(x)=>{return Observable.range(x, 2);}"
      },
    ]
  }];
  public properties = {
    fi: 0
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public toString = () => {
    return '.flatMap(' + FlatMap.propertiesType[0].types[this.properties.fi].text + ')';
  }
}
