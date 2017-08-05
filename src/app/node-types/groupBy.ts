import {RxNode} from './rxNode';
import {PropertyType} from './property-type';
import {PropertyTypeEnum} from './propertyType.enum';
import {SampleFunctions} from './sample-functions';
export class GroupBy extends RxNode {
  protected static title = 'GroupBy';
  protected static link = 'http://reactivex.io/documentation/operators/groupBy.html';
  protected static desc = 'divide an Observable into a set of Observables that each emit a ' +
    'different subset of items from the original Observable';
  protected static maxInput = 1;
  protected static minInput = 1;

  protected static propertiesType = new PropertyType('object', PropertyTypeEnum.Object, [
    new PropertyType('keySelector', PropertyTypeEnum.Method, [
      SampleFunctions.GET_X,
      SampleFunctions.GET_CODE,
    ], 'a function that accepts an item from the source Observable and returns its key'),
    new PropertyType('elementSelector', PropertyTypeEnum.Method, [
      SampleFunctions.GET_X,
      SampleFunctions.GET_CODE,
    ], 'a function that accepts an item from the source Observable and returns an item to be ' +
      'emitted in its place by one of the resulting Observables'),
    new PropertyType('durationSelector', PropertyTypeEnum.Method, [
      SampleFunctions.TIMEOUT,
      SampleFunctions.NOTHING,
    ], 'a function used to compare two keys for identity (that is, whether items with two keys ' +
      'should be emitted on the same Observable)'),
  ], '');

  public properties = {
    keySelector: 0,
    elementSelector: 0,
    durationSelector: 0,
  };
  public graphInputs = [];

  public runner = () => {
    return this.graphInputs[0].observable.groupBy(
      GroupBy.propertiesType.params[0].params[this.properties.keySelector].func,
      GroupBy.propertiesType.params[1].params[this.properties.elementSelector].func,
      GroupBy.propertiesType.params[2].params[this.properties.durationSelector].func);
  }
  public toString = () => {
    return '.groupBy(' +
      GroupBy.propertiesType.params[0].params[this.properties.keySelector].text + ', ' +
      GroupBy.propertiesType.params[1].params[this.properties.elementSelector].text + ', ' +
      GroupBy.propertiesType.params[2].params[this.properties.durationSelector].text +
      ')';
  }
}
