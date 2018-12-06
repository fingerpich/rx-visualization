import {PropertyType} from './node-types/property-type';
import {Observable} from 'rxjs/Observable';
import {RxNode} from './node-types/rxNode';

export interface Operator {
  title: string;
  link: string;
  desc: string;
  maxInput: number;
  minInput: number;
  propertiesType: PropertyType;
  graphInputs: Array<Operator>;
  data: Operator;
}
