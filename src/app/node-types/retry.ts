import {Observable} from "rxjs/Rx";

export class Retry {
  protected static title = "Retry";
  protected static link = "http://reactivex.io/documentation/operators/retry.html";
  protected static desc = "if a source Observable sends an onError notification, resubscribe to it in the hopes that it will complete without error";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{name:"retryCount",type: 'number'}];

  public runner = ({retryCount}) => {
    return this.graphInputs[0].retry(retryCount);
  };
  public toString = ({}) => {
    return '.retry(' + this.properties.retryCount + ');';
  };


  public properties = {
    retryCount: 3
  };
  public graphInputs = [];
}
