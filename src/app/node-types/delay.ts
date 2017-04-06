import {Observable} from "rxjs/Rx";

export class Delay {
  public static title = "Delay";
  public static link = "http://reactivex.io/documentation/operators/delay.html";
  public static desc = "shift the emissions from an Observable forward in time by a particular amount";

  public runner = ({}) => {
    return this.graphInputs[0].delay(new Date(Date.now() + this.properties.delay));
  };

  private static propertiesType = [{name:"delay",type: "number"}];
  public properties = {
    delay: 1000
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public toString = ({}) => {
    return '.delay(new Date(Date.now() + ' + this.properties.delay + '))';
  }
}
