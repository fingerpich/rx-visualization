import {Observable} from "rxjs/Rx";

export class Join {
  protected static title = "Join";
  protected static link = "http://reactivex.io/documentation/operators/join.html";
  protected static desc = "combine items emitted by two Observables whenever an item from one Observable is emitted during a time window defined according to an item emitted by the other Observable";
  protected static maxInput = 2;
  protected static minInput = 2;

  protected static propertiesType = [
    {name:"fi1",type: 'function',types:[
    {name:"timeout",func:()=>{Observable.timer(0)},text:"()=>{Observable.timer(0)}"},
  ]},
    {name:"fi2",type: 'function',types:[
      {name:"timeout",func:()=>{Observable.timer(0)},text:"()=>{Observable.timer(0)}"},
    ]},
    {name:"fi3",type: 'function',types:[
      {name:"timeout",func:(x,y)=>{return x+y},text:"(x+y)=>{return x+y}"},
    ]},
  ];

  public runner = () => {
    return this.graphInputs[0].join(
      this.graphInputs[1]/* the second observable connected to this block */,
      Join.propertiesType[0].types[this.properties.fi1].func,
      Join.propertiesType[1].types[this.properties.fi2].func,
      Join.propertiesType[2].types[this.properties.fi3].func,
    )
  };
  public toString = ({}) => {
    return '.join('+this.graphInputs[1].toString()
      +', '+Join.propertiesType[1].types[this.properties.fi3].text
      +', '+Join.propertiesType[2].types[this.properties.fi3].text
      +', '+Join.propertiesType[3].types[this.properties.fi3].text
      +')';
  };


  public properties = {
    fi1: 0,
    fi2: 0,
    fi3: 0,
  };
  public graphInputs = [];
}
