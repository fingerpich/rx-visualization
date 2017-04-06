export class Switch {
  public static title = "Switch";
  public static link = "http://reactivex.io/documentation/operators/switch.html";
  public static desc = "convert an Observable that emits Observables into a single Observable that emits the items emitted by the most-recently-emitted of those Observables";

  public runner = () => {
    return this.graphInputs[0].switch();
  };

  public static propertiesType = [];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public static toString = () => {
    return '.switch()';
  }
}
