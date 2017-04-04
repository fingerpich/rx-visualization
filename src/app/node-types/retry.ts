import {Observable} from "rxjs/Rx";

export class Retry {
  public static title = "Retry";
  public static link = "http://reactivex.io/documentation/operators/retry.html";
  public static desc = "if a source Observable sends an onError notification, resubscribe to it in the hopes that it will complete without error";

  public runner = ({retryCount}) => {
    return this.graphInputs[0].retry(retryCount);
  };

  private static propertiesType = [{retryCount: 'Number'}];
  public properties = {
    retryCount: 3
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = ({}) => {
    return '.retry(' + this.properties.retryCount + ');';
  }
}
