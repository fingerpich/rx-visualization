import {RxNode} from '../node-types/rxNode';

export interface DiagramNode {
  id: Number;
  x: number;
  y: number;
  node_type: string;
  data: RxNode;
}
