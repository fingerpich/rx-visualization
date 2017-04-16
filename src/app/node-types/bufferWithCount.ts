import {RxNode} from "./rxNode";
import {PropertyType} from "./property-type";
import {PropertyTypeEnum} from "./propertyType.enum";
export class BufferWithCount extends RxNode {
  protected static title = "BufferWithCount";
  protected static link = "http://reactivex.io/documentation/operators/buffer.html";
  protected static desc = "periodically gather items from an Observable into bundles and emit these bundles rather than emitting the items one at a time";
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType("parameters",PropertyTypeEnum.Object,[
      new PropertyType("count",PropertyTypeEnum.Number),
      new PropertyType("skip",PropertyTypeEnum.Number)
    ],
    "");

  public runner = ({count, skip}) => {
    return this.graphInputs[0].bufferWithCount(count, skip);
  };
  public toString = () => {
    const {count, skip}=this.properties;
    return '.bufferWithCount(' + count + ', ' + skip + ')';
  };


  public properties = {
    count: 3,
    skip: 2
  };
  public graphInputs = [];
}
