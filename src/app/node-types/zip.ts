import {Observable} from "rxjs/Rx";
import {RxNode} from "./rxNode";

export class Zip extends RxNode {
  protected static title = "Zip";
  protected static link = "http://reactivex.io/documentation/operators/zip.html";
  protected static desc = "combine the emissions of multiple Observables together via a specified function and emit single items for each combination based on the results of this function";
  protected static maxInput = 300;
  protected static minInput = 2;

  protected static propertiesType = [{name:"fi",type: 'function',types:[
    {name:"join",func:(...args)=>{return args.join(',');},text:"(...args)=>{return args.join(',');}"},
  ]}];

  public runner = ({}) => {
    return Observable.zip(...this.graphInputs,Zip.propertiesType[0].types[this.properties.fi].func);
  };
  public toString = ({}) => {
    return 'Observable.zip('+this.graphInputs.join(",")+', '+Zip.propertiesType[0].types[this.properties.fi].text+')';
  };


  public properties = {
    fi:0
  };
  public graphInputs = [];
}
