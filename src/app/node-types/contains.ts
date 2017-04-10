import {RxNode} from "./rxNode";
export class Contains extends RxNode {
  protected static title = "Contains";
  protected static link = "http://reactivex.io/documentation/operators/contains.html";
  protected static desc = "emit only item n emitted by an Observable";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [
    {
      name: "item", type: 'function', types: [
      {name: "num", func: 2, text: '2'},
      {name: "text", func: "text", text: "'text'"},
    ]
    }
  ];

  public runner = () => {
    return this.graphInputs[0].contains(Contains.propertiesType[0].types[this.properties.item].func);
  };
  public toString = () => {
    return '.contains(' + Contains.propertiesType[0].types[this.properties.item].text + ')';
  };


  public properties = {
    item: 0,
  };

  public graphInputs = [];
}
