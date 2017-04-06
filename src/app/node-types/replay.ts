export class Replay {
  public static title = "Replay";
  public static link = "http://reactivex.io/documentation/operators/replay.html";
  public static desc = "ensure that all observers see the same sequence of emitted items, even if they subscribe after the Observable has begun emitting items";

  public runner = () => {
    return this.graphInputs[0].replay(Replay.propertiesType[0].types[this.properties.transFunc].func, this.properties.bufferSize, this.properties.window, this.properties.scheduler);
  };

  private static propertiesType = [
    {
      transFunc: 'function',
      types: [
        {
          name: "num", func: (x) => {
          return x.take(2).repeat(2);
        }, text: '(x)=>{return x.take(2).repeat(2);}'
        },
        {name: "text", func: "text", text: "'text'"},
      ],
      desc: "a transforming function that takes an item emitted by the source Observable as its parameter and returns an item to be emitted by the resulting Observable"
    },
    {
      bufferSize: 'Number',
      types: null,
      desc: 'the maximum number of items to buffer and replay to subsequent observers'
    },
    {window: 'Number', types: null, desc: 'the maximum number of items to buffer and replay to subsequent observers'},
    {scheduler: 'Number', types: null, desc: 'the Scheduler on which this operator will operate'},
  ];

  public properties = {
    transFunc: 0,
    bufferSize: 2,
    window: null,
    scheduler: null
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public commandMaker = () => {
    return '.replay(' + Replay.propertiesType[0].types[this.properties.transFunc].func + ', ' + this.properties.bufferSize + ', ' + this.properties.window + ', ' + this.properties.scheduler + ')';
  }
}
