export class Distinct {
  protected static title = "Distinct";
  protected static link = "http://reactivex.io/documentation/operators/distinct.html";
  protected static desc = "suppress duplicate items emitted by an Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [];

  public runner = () => {
    return this.graphInputs[0].distinct();
  };
  public toString = () => {
    return `.distinct()`;
  };


  public properties = {};
  public graphInputs = [];
}
