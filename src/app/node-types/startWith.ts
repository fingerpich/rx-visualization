export class StartWith {
  public static title = "StartWith";
  public static link = "http://reactivex.io/documentation/operators/startwith.html";
  public static desc = "emit a specified sequence of items before beginning to emit the items from the source Observable";

  public runner = () => {
    return this.graphInputs[0].startwith(StartWith.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [{
    name: "fi", type: 'function', types: [
      {name: "2", func: 2, text: "2"},
      {name: "obj", func: {code: 2}, text: "{code:2}"},
    ]
  }];
  public properties = {
    fi: 2,
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public toString = () => {
    return '.startwith(' + StartWith.propertiesType[0].types[this.properties.fi].text + ')';
  }
}
