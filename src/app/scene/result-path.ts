import {Result} from './result';

export class ResultPath {
  path: Array<Result> = [];
  id: number;

  constructor(first: Result, id: number) {
    this.id = id;
    this.add(first);
  }

  add(next: Result) {
    this.path.push(next);
  }

  hasFinished() {
    return this.path.length === 1 && this.path[0].lastTicks > 1;
  }

  getThisClockResult() {
    if (this.path.length) {
      if (this.path[0].timeoutStep > 1) {
        this.path[0].timeoutStep --;
      } else {
        if (this.path.length > 1) {
          return this.path.shift();
        } else {
          this.path[0].lastTicks++;
          return this.path[0];
        }
      }
    }
    return null;
  }
}
