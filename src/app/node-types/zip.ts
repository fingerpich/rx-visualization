import {Observable} from "rxjs/Rx";

export class Zip {
  public static title = "Zip";
  public static link = "http://reactivex.io/documentation/operators/zip.html";
  public static desc = "combine the emissions of multiple Observables together via a specified function and emit single items for each combination based on the results of this function";

  public runner = ({}) => {
    return Observable.zip(...this.graphInputs,Zip.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [{fi: 'function',types:[
    {name:"join",func:(...args)=>{return args.join(',');},text:"(...args)=>{return args.join(',');}"},
  ]}];
  public properties = {
    fi:0
  };

  public graphInputs = [];
  public static maxInput = 300;
  public static minInput = 2;

  public commandMaker = ({}) => {
    return 'Observable.zip('+this.graphInputs.join(",")+', '+Zip.propertiesType[0].types[this.properties.fi].text+')';
  }
}
