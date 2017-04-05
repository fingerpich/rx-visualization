
export class SequenceEqual {
  public static title = "SequenceEqual";
  public static link = "http://reactivex.io/documentation/operators/sequenceEqual.html";
  public static desc = "determine whether two Observables emit the same sequence of items";

  public runner = () => {
    return this.graphInputs[0].sequenceEqual(
      this.graphInputs[1]/* the second observable connected to this block */,
    )
  };

  private static propertiesType = [];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 2;
  public static minInput = 2;

  public commandMaker = ({}) => {
    return '.join('+this.graphInputs[1].commandMaker()+')';
  }
}
