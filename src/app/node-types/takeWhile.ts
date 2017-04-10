import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";

export class TakeWhile extends RxNode {
  protected static title = "TakeWhile";
  protected static link = "http://reactivex.io/documentation/operators/takewhile.html";
  protected static desc = "discard items emitted by an Observable after a specified condition becomes false";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{
    name:"fi",type: 'function', types: [
      {
        name: "ST6", func: (x) => {
        return x < 6;
      }, text: "(x)=>{return x > 6;}"
      },
    ]
  }];

  public runner = ({}) => {
    return this.graphInputs[0].takeWhile(TakeWhile.propertiesType[0].types[this.properties.fi].func);
  };
  public toString = ({}) => {
    return '.takeWhile(' + TakeWhile.propertiesType[0].types[this.properties.fi].text + ')';
  };


  public properties = {
    fi: 0,
  };

  public graphInputs = [];
}
