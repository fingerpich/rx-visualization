export class TakeUntil {
  protected static title = "TakeUntil";
  protected static link = "http://reactivex.io/documentation/operators/TakeUntil.html";
  protected static desc = "discard any items emitted by an Observable after a second Observable emits an item or terminates";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{
    name:"fi",type: 'function', types: [
      {
        name: "ST6", func: (x) => {
        return x < 6;
      }, text: "(x)=>{return x > 6;}"
      },
    ]
  }];

  public runner = () => {
    return this.graphInputs[0].takeUntil(TakeUntil.propertiesType[0].types[this.properties.fi].func);
  };
  public toString = () => {
    return '.takeUntil(' + TakeUntil.propertiesType[0].types[this.properties.fi].text + ')';
  };


  public properties = {
    fi: 0,
  };
  public graphInputs = [];
}
