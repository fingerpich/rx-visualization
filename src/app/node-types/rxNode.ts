import {PropertyType} from './property-type';
import {Observable} from 'rxjs/Observable';

export class RxNode {
  protected static title: string;
  protected static link: string;
  protected static desc: string;
  protected static maxInput: Number;
  protected static minInput: Number;

  protected static propertiesType: PropertyType;

  public static cntr = 1;

  public rxo: any;
  public level: any;
  public rx: any;
  public properties: Object;
  public graphInputs: Array<Object>;
  public runner;
  private delayBetweenEmittedItem = 200;

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
    this.rxo = this.runner();
    this.rx = Observable.zip(
      this.rxo.flatMap((x) => {
        x = x.id ? x : {x: x, id: RxNode.cntr++};
        return Observable.of(x);
      }),
      Observable.interval(this.delayBetweenEmittedItem),
      (c) => {
        subscribeItem(node, c);
        return c;
      }
    );
    this.level = level;
  }

  public dispose() {
    if (this.rxo && this.rxo.unsubscribe) {
      this.rxo.unsubscribe();
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
