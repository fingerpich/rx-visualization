import {Observable} from "rxjs/Rx";

export class WindowWithCount {
  public static title = "WindowWithCount";
  public static link = "http://reactivex.io/documentation/operators/window.html";
  public static desc = "periodically subdivide items from an Observable into Observable windows and emit these windows rather than emitting the items one at a time";

  public runner = ({count, skip}) => {
    return this.graphInputs[0].windowWithCount(count, skip);
  };

  private static propertiesType = [{count: 'Number', skip: 'Number'}];
  public properties = {
    count: 3,
    skip: 2
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public commandMaker = () => {
    const {count, skip}=this.properties;
    return '.windowWithCount(' + count + ', ' + skip + ')';
  }
}
