export class Scan {
  public static title = "scan";
  public static link = "http://reactivex.io/documentation/operators/scan.html";
  public static desc = "apply a function to each item emitted by an Observable, sequentially, and emit each successive value";

  public runner = () => {
    return this.graphInputs[0].map(Scan.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [{name:"fi",type: 'function',types:[
    {name:"sum",func:(acc, x) => { return acc + x; },text:"(acc, x) => { return acc + x; }"},
    {name:"time",func:(acc, x) => { return acc * x; },text:"(acc, x) => { return acc * x; }"},
  ]}];
  public properties = {
    fi: 0,
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public toString = () => {
    return '.scan(' + Scan.propertiesType[0].types[this.properties.fi].text + ')';
  }
}
