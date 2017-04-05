export class Contains {
  public static title = "Contains";
  public static link = "http://reactivex.io/documentation/operators/contains.html";
  public static desc = "emit only item n emitted by an Observable";

  public runner = () => {
    return this.graphInputs[0].contains(this.properties.item);
  };

  private static propertiesType = [
    {item: 'function',types:[
      {name:"num",func:2,text:'2'},
      {name:"text",func:"text",text:"'text'"},
    ]},
    {item:'Number',types:null},
  ];

  public properties = {
    item: 2,
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public commandMaker = () => {
    return '.contains(' + this.properties.item + ')';
  }
}
