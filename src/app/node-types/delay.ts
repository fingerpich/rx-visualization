export class Delay {
  protected static title = "Delay";
  protected static link = "http://reactivex.io/documentation/operators/delay.html";
  protected static desc = "shift the emissions from an Observable forward in time by a particular amount";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{name:"delay",type: "number"}];

  public runner = ({}) => {
    return this.graphInputs[0].delay(new Date(Date.now() + this.properties.delay));
  };
  public toString = ({}) => {
    return '.delay(new Date(Date.now() + ' + this.properties.delay + '))';
  };


  public properties = {
    delay: 1000
  };
  public graphInputs = [];
}
