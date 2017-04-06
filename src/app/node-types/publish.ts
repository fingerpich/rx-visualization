import {Observable} from "rxjs/Rx";

export class Publish {
  public static title = "Publish";
  public static link = "http://reactivex.io/documentation/operators/publish.html";
  public static desc = "convert an ordinary Observable into a connectable Observable";

  public runner = () => {
    return this.graphInputs[0].publish();
  };

  private static propertiesType = [];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public toString = () => {
    return '.publish()';
  }

}
