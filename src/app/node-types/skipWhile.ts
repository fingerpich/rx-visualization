export class SkipWhile {
  public static title = "SkipWhile";
  public static link = "http://reactivex.io/documentation/operators/SkipWhile.html";
  public static desc = "discard items emitted by an Observable until a specified condition becomes false";

  public runner = () => {
    return this.graphInputs[0].skipWhile(SkipWhile.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [{
    fi: 'function', types: [
      {
        name: "ST6", func: (x) => {
        return x < 6;
      }, text: "(x)=>{return x > 6;}"
      },
    ]
  }];
  public properties = {
    fi: 0,
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = () => {
    return '.skipWhile(' + SkipWhile.propertiesType[0].types[this.properties.fi].func + ')';
  };
}
