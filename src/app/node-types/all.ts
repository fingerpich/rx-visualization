export class All {
  public static title = "All";
  public static link = "http://reactivex.io/documentation/operators/all.html";
  public static desc = "determine whether all items emitted by an Observable meet some criteria";

  public runner = () => {
    return this.graphInputs[0].every(All.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [{
    fi: 'function', types: [
      {
        name: "GT6", func: (x) => {
        return x > 6;
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
    return '.every(' + All.propertiesType[0].types[this.properties.fi].func + ')';
  };
}
