import {Observable} from "rxjs/Rx";

export class Debounce {
  public static title = "Debounce";
  public static link = "http://reactivex.io/documentation/operators/debounce.html";
  public static desc = "only emit an item from an Observable if a particular timespan has passed without it emitting another item";

  public runner = () => {
    return this.graphInputs[0].debounce(this.properties.debounceTime);
  };

  private static propertiesType = [{debounceTime: 'Number'}];
  public properties = {
    debounceTime: 500 /* ms */
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = () => {
    return '.debounce(' + this.properties.debounceTime + ')';
  }
}
