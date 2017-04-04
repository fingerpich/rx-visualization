import {Observable} from "rxjs/Rx";

export class Catch {
  public static title = "Catch";
  public static link = "http://reactivex.io/documentation/operators/catch.html";
  public static desc = "recover from an onError notification by continuing the sequence without error";

  public runner = ({}) => {
    return this.graphInputs[0].catch((err) => {
      return "err:" + err;
    });
  };

  private static propertiesType: [{}];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = ({}) => {
    return `.catch((err)=>{return "err:"+err;});`;
  }
}
