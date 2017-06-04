import {Observable} from 'rxjs';

class SampleFunction {
  name: string;
  desc: string;
  func: any;
  text: string;
  constructor(name, func, text, description = '') {
    this.desc = description;
    this.func = func;
    this.text = text;
    this.name = name;
  }
}

export class SampleFunctions {
  public static GT6 = new SampleFunction('Greater than 6', x => x.x > 6, 'x => x>6');
  public static ST6 = new SampleFunction('Smaller than 6', x => x.x < 6, 'x => x<6');
  public static ALL = new SampleFunction('all', () => true, '() => true');
  public static X2 = new SampleFunction('x2', (x) => { x.x = x.x * x.x; return x; } , '(x) => x * x');
  public static Xpoint2 = new SampleFunction('2x', (x) => {x.x = 2 * x.x; return x;}, '(x) => 2 * x');
  public static X3 = new SampleFunction('x3', (x) => { x.x = x.x * x.x * x.x; return x}, '(x) => x * x * x');
  public static HELLOX = new SampleFunction('helloX', (x) => {x.x = x.x + 'hello'; return x;}, '(x) => x + "hello"');

  public static EVEN = new SampleFunction('even', (x) => x.x % 2 === 0, '(x) => x % 2 === 0');
  public static ODD = new SampleFunction('odd', (x) => x.x % 2 === 1, '(x) => x % 2 === 1');
  public static RANGE2 = new SampleFunction('range2', (x) => Observable.range(x.x, 2), '(x) => Rx.Observable.range(x, 2)');
  public static RANGE3 = new SampleFunction('range3', (x) => Observable.range(x.x, 3), '(x) => Rx.Observable.range(x, 3)');
  public static RANGE5 = new SampleFunction('range5', (x) => Observable.range(x.x, 5), '(x) => Rx.Observable.range(x, 5)');
  public static GET_X = new SampleFunction('getX', (x) => x.x, '(x) => x.x');
  public static GET_CODE = new SampleFunction('getCode', (x) => x.code, '(x) => x.code');
  public static TIMEOUT0 = new SampleFunction('timeout0', () => Observable.timer(0), '() => Rx.Observable.timer(0)');
  public static TIMEOUT = new SampleFunction('timeout', () => Observable.timer(2000), '() => Rx.Observable.timer(2000)');
  public static NOTHING = new SampleFunction('nothing', (x) => x.x, '(x) => x');
  public static XplusY = new SampleFunction('x+y', (x, y) => x.x + y.x, '(x,y) => x + y');
  public static TRANS2 = new SampleFunction('transform1', (x) => x.take(2).repeat(2), '(x) => x.take(2).repeat(2)');
  public static TRANS3 = new SampleFunction('transform1', (x) => x.take(2).repeat(3), '(x) => x.take(2).repeat(3)');
  public static SCAN_SUM = new SampleFunction('scanSum', (acc, x) => acc + x.x, '(acc,x) => acc + x');
  public static SCAN_TIME = new SampleFunction('scanTime', (acc, x) => acc * x.x, '(acc,x) => acc * x');
  public static ZIP1 = new SampleFunction('scanTime', (...args) => args.join(','), '(...args) => args.join(",")');
}
