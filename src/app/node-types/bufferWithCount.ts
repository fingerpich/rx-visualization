import {Observable} from "rxjs/Rx";

export class BufferWithCount {
  public static title = "BufferWithCount";
  public static link = "http://reactivex.io/documentation/operators/buffer.html";
  public static desc = "periodically gather items from an Observable into bundles and emit these bundles rather than emitting the items one at a time";

  public runner = ({count, skip}) => {
    return this.graphInputs[0].bufferWithCount(count, skip);
  };

  private static propertiesType = [{name:"count",type: 'number'},{name:"skip",type: 'number'}];
  public properties = {
    count: 3,
    skip: 2
  };

  public graphInputs = [];
  public maxInput = 1;
  public minInput = 1;

  public toString = () => {
    const {count, skip}=this.properties;
    return '.bufferWithCount(' + count + ', ' + skip + ')';
  }
}
