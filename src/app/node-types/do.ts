import {Observer} from "rxjs";

export class Do {
  public static title = "Do";
  public static link = "http://reactivex.io/documentation/operators/do.html";
  public static desc = "register an action to take upon a variety of Observable lifecycle events";

  public runner = () => {
    return this.graphInputs[0].do(Do.propertiesType[0].types[this.properties.fi].func);
  };

  private static propertiesType = [{
    fi: 'function', types: [
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
  public properties = {
    fi: 0,
  };

  public graphInputs = [];
  public static maxInput = 1;
  public static minInput = 1;

  public commandMaker = () => {
    return '.do(' + Do.propertiesType[0].types[this.properties.fi].func + ')';
  };
}
