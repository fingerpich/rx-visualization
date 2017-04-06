export class ElementAt {
  public static title = "ElementAt";
  public static link = "http://reactivex.io/documentation/operators/elementat.html";
  public static desc = "emit only item n emitted by an Observable";

  public runner = () => {
    return this.graphInputs[0].elementAt(this.properties.index);
  };

  private static propertiesType = [{name:"index",type: 'number'}];
  public properties = {
    index:2,
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public toString = () => {
    return '.elementAt('+this.properties.index+')';
  }
}
