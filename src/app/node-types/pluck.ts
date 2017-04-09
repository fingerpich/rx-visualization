import {Observable} from "rxjs/Rx";

export class Pluck {
  protected static title = "Pluck";
  protected static link = "http://reactivex.io/documentation/operators/map.html";
  protected static desc = "It transforms the elements emitted by the source Observable by extracting a single named property from those elements and emitting that property in their place";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{name:"propName",type: "string"}];

  public runner = ({}) => {
    return this.graphInputs[0].pluck(this.properties.propName);
  };
  public toString = ({}) => {
    return '.pluck(' + this.properties.propName + '))';
  };


  public properties = {
    propName: "x"
  };
  public graphInputs = [];
}
