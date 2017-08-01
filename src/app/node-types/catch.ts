import {RxNode} from './rxNode';
export class Catch extends RxNode {
  protected static title = 'Catch';
  protected static link = 'http://reactivex.io/documentation/operators/catch.html';
  protected static desc = 'recover from an onError notification by continuing the sequence without error';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = null;

  public graphInputs = [];
  public properties = {};

  public runner = ({}) => {
    return this.graphInputs[0].observable.catch((err) => {
      return 'err:' + err;
    });
  }
  public toString = ({}) => {
    return `.catch((err)=>{return 'err:'+err;});`;
  }
}
