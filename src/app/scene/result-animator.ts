import {ResultPath} from './result-path';
import {Result} from './result';
import {Subject} from 'rxjs/Subject';

class ResultAnimator {
  resultPathArray: Array<ResultPath>;
  resultChanged = new Subject();
  hasFinished = new Subject();
  timeoutRef;

  constructor() {
    this.reset();
  }

  add (res: Result) {
    res.lastTicks = 0;
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
    this.timeoutRef = setTimeout(() => this.tick(true, delay), delay);
    const hasFinished = this.resultPathArray.length && this.resultPathArray.reduce((acc, result) => {
      return result.hasFinished() && acc;
    }, true);
    if (hasFinished) {
      this.hasFinished.next({finished: true});
    }
  }

  stop() {
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }
  }
}

export default new ResultAnimator();
