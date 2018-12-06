import {PropertyType} from './property-type';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {Operator} from '../operator';
import {NumberInfo} from '../number-info';
import {DiagramNode} from '../scene/diagram-node';

export class RxNode implements Operator {
  protected static title: string;
  protected static link: string;
  protected static desc: string;
  protected static maxInput: number;
  protected static minInput: number;

  protected static propertiesType: PropertyType;

  private static cntr = 1;

  public rxo: any;
  public level: any;
  public rx: any;
  public properties: Object;
  public graphInputs: Array<any>;
  public runner;
  public data: RxNode;

  get title(): string {
    return (<typeof RxNode>this.constructor).title;
  }
  get maxInput(): number {
    return (<typeof RxNode>this.constructor).maxInput;
  }
  get minInput(): number {
    return (<typeof RxNode>this.constructor).minInput;
  }
  get link(): string { return (<typeof RxNode>this.constructor).link; }
  get desc(): string { return (<typeof RxNode>this.constructor).desc; }
  get propertiesType(): PropertyType {
    return (<typeof RxNode>this.constructor).propertiesType;
  }

  public run(node: DiagramNode, level, subscribeItem) {
    const res = this.runner();
    this.rx = res.pipe(map((x: NumberInfo | number) => {
      let xx: NumberInfo;
      if (!(<NumberInfo>x).id) {
        xx = <NumberInfo>{x: x, id: RxNode.cntr++};
      } else {
        xx = JSON.parse(JSON.stringify(x)); // cloned to save x during the result animation
        if (node.node_type === 'Share' && (<NumberInfo>x).shared > 1) {
          xx.id = RxNode.cntr++;
        }
      }
      subscribeItem(node, xx);
      return xx;
    }));
    this.level = level;
  }

  public dispose() {
    if (this.rxo) {
      if (this.rxo.unsubscribe) {
        this.rxo.unsubscribe();
      }
      this.rxo = undefined;
    }
    if (this.rx) {
      this.rx = undefined;
    }
  }

  public areInputsReady(nodeInputs) {
    return nodeInputs.length <= this.maxInput &&
      nodeInputs.length >= this.minInput &&
      nodeInputs.every(n => n.data.rx);
  }
}
