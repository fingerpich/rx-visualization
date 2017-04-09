export class SkipUntil {
  protected static title = "SkipUntil";
  protected static link = "http://reactivex.io/documentation/operators/SkipUntil.html";
  protected static desc = " discard items emitted by an Observable until a second Observable emits an item";
  protected static maxInput = 2;
  protected static minInput = 2;

  protected static propertiesType = [];

  public runner = () => {
    return this.graphInputs[0].skipUntil(
      this.graphInputs[1]/* the second observable connected to this block */,
    )
  };
  public toString = ({}) => {
    return '.skipUntil('+this.graphInputs[1].toString()+')';
  };


  public properties = {};
  public graphInputs = [];
}
