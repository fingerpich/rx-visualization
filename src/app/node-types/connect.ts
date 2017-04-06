import {Observable, Subject} from "rxjs";
export class Connect {
  public static title = "Connect";
  public static link = "http://reactivex.io/documentation/operators/connect.html";
  public static desc = "instruct a connectable Observable to begin emitting items to its subscribers";

  public runner = () => {
    return this.nodeClick.subscribe(() => {
      this.graphInputs[0].connect();
    });
  };

  private static propertiesType = [];

  public properties = {};

  public nodeClick = new Subject();
  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public commandMaker = () => {
    return '.connect()';
  }
}
