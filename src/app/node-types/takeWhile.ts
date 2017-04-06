import {Observable} from "rxjs/Rx";

export class TakeWhile {
  public static title = "TakeWhile";
  public static link = "http://reactivex.io/documentation/operators/takewhile.html";
  public static desc = "discard items emitted by an Observable after a specified condition becomes false";

  public runner = ({}) => {
    return this.graphInputs[0].takeWhile(TakeWhile.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [{
    name:"fi",type: 'function', types: [
      {
        name: "ST6", func: (x) => {
        return x < 6;
      }, text: "(x)=>{return x > 6;}"
      },
    ]
  }];
  public properties = {
    fi: 0,
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public toString = ({}) => {
    return '.takeWhile(' + TakeWhile.propertiesType[0].types[this.properties.fi].text + ')';
  }
}
