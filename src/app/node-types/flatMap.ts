import {Observable} from "rxjs/Rx";

export class FlatMap {
  protected static title = "FlatMap";
  protected static link = "http://reactivex.io/documentation/operators/flatmap.html";
  protected static desc = "transform the items emitted by an Observable into Observables, then flatten the emissions from those into a single Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{
    name: "fi", type: 'function', types: [
      {
        name: "x,x+1", func: (x) => {
        return Observable.range(x, 2);
      }, text: "(x)=>{return Observable.range(x, 2);}"
      },
    ]
  }];

  public runner = () => {
    return this.graphInputs[0].flatMap(FlatMap.propertiesType[0].types[this.properties.fi].func);
  };
  public toString = () => {
    return '.flatMap(' + FlatMap.propertiesType[0].types[this.properties.fi].text + ')';
  };


  public properties = {
    fi: 0
  };
  public graphInputs = [];
}
