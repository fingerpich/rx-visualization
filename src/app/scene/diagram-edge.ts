import {DiagramNode} from './diagram-node';

export interface DiagramEdge {
  source: DiagramNode;
  target: DiagramNode;
}
