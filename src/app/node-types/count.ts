import {RxNode} from "./rxNode";
export class Count extends RxNode {
  protected static title = "Average";
  protected static link = "http://reactivex.io/documentation/operators/Count.html";
  protected static desc = "count the number of items emitted by the source Observable and emit only this value";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [
    {
      name: "fi", type: 'function', types: [
      {name: "all", func: () => true, text: '()=>true'},
      {name: "gt6", func: x => x > 6, text: "x=>x>6"},
    ]
    },
  ];

  public runner = () => {
    return this.graphInputs[0].count(Count.propertiesType[0].types[this.properties.fi].func);
  };
  public toString = () => {
    return '.count(' + Count.propertiesType[0].types[this.properties.fi].text + ')';
  };


  public properties = {
    fi: 0
  };
  public graphInputs = [];
}
