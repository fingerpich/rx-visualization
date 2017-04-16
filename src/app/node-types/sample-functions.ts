class SampleFunction {
  name:string;
  desc:string;
  func:any;
  text:string;
  constructor(name,func,text,description=""){
    this.desc=description;
    this.func=func;
    this.text=text;
    this.name=name;
  }
}
export class SampleFunctions {
  public static GT6 = new SampleFunction("Greater than 6",x => x>6,"","x => x>6");
}
