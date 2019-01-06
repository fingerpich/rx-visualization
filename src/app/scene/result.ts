import {NumberInfo} from './number-info';
import {DiagramNode} from './diagram-node';

export interface Result {
  numberInfo: NumberInfo;
  node: DiagramNode;
  timeoutStep: number;
  lastTicks: number;
}
