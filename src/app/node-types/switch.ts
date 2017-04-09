export class Switch {
  protected static title = "Switch";
  protected static link = "http://reactivex.io/documentation/operators/switch.html";
  protected static desc = "convert an Observable that emits Observables into a single Observable that emits the items emitted by the most-recently-emitted of those Observables";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [];

  public runner = () => {
    return this.graphInputs[0].switch();
  };
  public static toString = () => {
    return '.switch()';
  };


  public properties = {};
  public graphInputs = [];
}
