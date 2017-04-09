import {Observer} from "rxjs";

export class Do {
  protected static title = "Do";
  protected static link = "http://reactivex.io/documentation/operators/do.html";
  protected static desc = "register an action to take upon a variety of Observable lifecycle events";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = [{
    name: "fi", type: 'function', types: [
      {
        name: "observer",
        func: [
          function (x) {
            console.log('Do Next: %s', x);
          },
          function (err) {
            console.log('Do Error: %s', err);
          },
          function () {
            console.log('Do Completed');
          }
        ]
        , text: "(x)=>{return x > 6;}"
      },
    ]
  }];

  public runner = () => {
    return this.graphInputs[0].do(Do.propertiesType[0].types[this.properties.fi].func);
  };
  public toString = () => {
    return '.do(' + Do.propertiesType[0].types[this.properties.fi].text + ')';
  };


  public properties = {
    fi: 0,
  };
  public graphInputs = [];
}
