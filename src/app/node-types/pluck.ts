import {Observable} from "rxjs/Rx";

export class Pluck {
  public static title = "Pluck";
  public static link = "http://reactivex.io/documentation/operators/map.html";
  public static desc = "It transforms the elements emitted by the source Observable by extracting a single named property from those elements and emitting that property in their place";

  public runner = ({}) => {
    return this.graphInputs[0].pluck(this.properties.propName);
  };

  private static propertiesType = [{name:"propName",type: "string"}];
  public properties = {
    propName: "x"
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public toString = ({}) => {
    return '.pluck(' + this.properties.propName + '))';
  }
}
