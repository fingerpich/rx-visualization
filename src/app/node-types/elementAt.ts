export class ElementAt {
  protected static title = "ElementAt";
  protected static link = "http://reactivex.io/documentation/operators/elementat.html";
  protected static desc = "emit only item n emitted by an Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{name:"index",type: 'number'}];

  public runner = () => {
    return this.graphInputs[0].elementAt(this.properties.index);
  };
  public toString = () => {
    return '.elementAt('+this.properties.index+')';
  };


  public properties = {
    index:2,
  };
  public graphInputs = [];
}
