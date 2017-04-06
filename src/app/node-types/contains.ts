export class Contains {
  public static title = "Contains";
  public static link = "http://reactivex.io/documentation/operators/contains.html";
  public static desc = "emit only item n emitted by an Observable";

  public runner = () => {
    return this.graphInputs[0].contains(Contains.propertiesType[0].types[this.properties.item].func);
  };

  private static propertiesType = [
    {
      name: "item", type: 'function', types: [
      {name: "num", func: 2, text: '2'},
      {name: "text", func: "text", text: "'text'"},
    ]
    }
  ];

  public properties = {
    item: 0,
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public toString = () => {
    return '.contains(' + Contains.propertiesType[0].types[this.properties.item].text + ')';
  }
}
