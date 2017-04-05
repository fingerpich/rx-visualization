export class IgnoreElements {
  public static title = "IgnoreElements";
  public static link = "http://reactivex.io/documentation/operators/ignoreElements.html";
  public static desc = "do not emit any items from an Observable but mirror its termination notification";

  public runner = () => {
    return this.graphInputs[0].ignoreElements();
  };

  private static propertiesType = [{}];
  public properties = {};

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public static commandMaker = () => {
    return '.ignoreElements()';
  }
}
