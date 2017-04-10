import {RxNode} from "./rxNode";
export class StartWith extends RxNode{
  protected static title = "StartWith";
  protected static link = "http://reactivex.io/documentation/operators/startwith.html";
  protected static desc = "emit a specified sequence of items before beginning to emit the items from the source Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{
    name: "fi", type: 'function', types: [
      {name: "2", func: 2, text: "2"},
      {name: "obj", func: {code: 2}, text: "{code:2}"},
    ]
  }];

  public runner = () => {
    return this.graphInputs[0].startwith(StartWith.propertiesType[0].types[this.properties.fi].func);
  };

  public toString = () => {
    return '.startwith(' + StartWith.propertiesType[0].types[this.properties.fi].text + ')';
  };


  public properties = {
    fi: 2,
  };
  public graphInputs = [];
}
