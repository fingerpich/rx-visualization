import {Observable} from "rxjs";
export class GroupBy {
  public static title = "GroupBy";
  public static link = "http://reactivex.io/documentation/operators/groupBy.html";
  public static desc = "divide an Observable into a set of Observables that each emit a different subset of items from the original Observable";

  public runner = () => {
    return this.graphInputs[0].map(GroupBy.propertiesType[0].types[this.properties.fi1].func, GroupBy.propertiesType[1].types[this.properties.fi2].func);
  };

  private static propertiesType = [
    {
      fi1: 'function', desc: 'a function that accepts an item from the source Observable and returns its key'
      , types: [
      {
        name: "getCode", func: (x) => {
        return x.code;
      }, text: "(x)=>{return x.code;}"
      },
      {
        name: "getX", func: (x) => {
        return x.x;
      }, text: "(x)=>{return x.x;}"
      },
    ]
    },
    {
      fi2: 'function',
      desc: 'a function that accepts an item from the source Observable and returns an item to be emitted in its place by one of the resulting Observables',
      types: [
        {
          name: "getCode", func: (x) => {
          return x.code;
        }, text: "(x)=>{return x.code;}"
        },
        {
          name: "getX", func: (x) => {
          return x.x;
        }, text: "(x)=>{return x.x;}"
        },
      ]
    },
    {
      fi3: 'function',
      desc: 'a function used to compare two keys for identity (that is, whether items with two keys should be emitted on the same Observable)',
      types: [
        {
          name: "timeout", func: (x) => {
          return Observable.timer(2000);
        }, text: "(x)=>{return x.code;}"
        },
        {
          name: "nothing", func: (x) => {
          return x;
        }, text: "(x)=>{return x;}"
        },
      ]
    },
  ];
  public properties = {
    fi1: 0,
    fi2: 0,
    fi3: 0,
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public commandMaker = () => {
    return '.map(' + GroupBy.propertiesType[0].types[this.properties.fi1].func + ', ' + GroupBy.propertiesType[0].types[this.properties.fi1].func + ')';
  }
}
