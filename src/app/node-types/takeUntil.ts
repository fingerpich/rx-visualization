export class TakeUntil {
  public static title = "TakeUntil";
  public static link = "http://reactivex.io/documentation/operators/TakeUntil.html";
  public static desc = "discard any items emitted by an Observable after a second Observable emits an item or terminates";

  public runner = () => {
    return this.graphInputs[0].takeUntil(TakeUntil.propertiesType[0].types[this.properties.fi].func);
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
    return '.takeUntil(' + TakeUntil.propertiesType[0].types[this.properties.fi].func + ')';
  };
}
