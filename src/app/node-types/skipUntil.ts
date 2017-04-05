import {Observable} from "rxjs/Rx";

export class SkipUntil {
  public static title = "SkipUntil";
  public static link = "http://reactivex.io/documentation/operators/SkipUntil.html";
  public static desc = " discard items emitted by an Observable until a second Observable emits an item";

  public runner = () => {
    return this.graphInputs[0].skipUntil(
      this.graphInputs[1]/* the second observable connected to this block */,
    )
  };

  private static propertiesType = [];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 2;
  public static minInput = 2;

  public commandMaker = ({}) => {
    return '.skipUntil('+this.graphInputs[1].commandMaker()+')';
  }
}
