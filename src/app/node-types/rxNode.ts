import {PropertyType} from './property-type';
import 'rxjs/add/operator/map';

export class RxNode {
  protected static title: string;
  protected static link: string;
  protected static desc: string;
  protected static maxInput: Number;
  protected static minInput: Number;

  protected static propertiesType: PropertyType;

  private static cntr = 1;

  public rxo: any;
  public level: any;
  public rx: any;
  public properties: Object;
  public graphInputs: Array<Object>;
  public runner;

  get title(): string {
    return (<typeof RxNode>this.constructor).title;
  }
  get maxInput(): Number {
    return (<typeof RxNode>this.constructor).maxInput;
  }
  get minInput(): Number {
    return (<typeof RxNode>this.constructor).minInput;
  }
  get link(): string { return (<typeof RxNode>this.constructor).link; }
  get desc(): string { return (<typeof RxNode>this.constructor).desc; }
  get propertiesType(): PropertyType {
    return (<typeof RxNode>this.constructor).propertiesType;
  }

  public run(node, level, subscribeItem) {
    this.rx = this.runner().map((x) => {
      if (!x.id) {
        x = {x: x, id: RxNode.cntr++};
      }
      subscribeItem(node, JSON.parse(JSON.stringify(x)));
      return x;
    });
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
