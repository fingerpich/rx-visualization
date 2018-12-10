import {ResultPath} from './result-path';
import {Result} from './result';
import {timer} from 'rxjs';
import {Subject} from 'rxjs/Subject';

class ResultAnimator {
  resultPathArray: Array<ResultPath>;
  resultChanged = new Subject();
  subscription;

  constructor() {
    this.reset();
  }

  add (res: Result) {
    const matchedNumInfo = this.resultPathArray.find(resPath => (resPath.id === res.numberInfo.id));
    if (matchedNumInfo) {
      matchedNumInfo.add(res);
    } else {
      this.resultPathArray.push(new ResultPath(res, res.numberInfo.id));
    }
  }

  reset() {
    this.resultPathArray = [];
    this.stop();
  }

  start(delay = 400) {
    this.tick(true, delay);
  }

  tick(keepOn, delay) {
    const resultArray: Array<Result> = this.resultPathArray
      .map(resultPath => resultPath.getThisClockResult())
      .filter(result => !!result);
    this.resultChanged.next(resultArray);
    this.subscription = setTimeout(() => this.tick(true, delay), delay);
  }

  stop() {
    if (this.subscription) {
      clearTimeout(this.subscription);
    }
  }
}

export default new ResultAnimator();
