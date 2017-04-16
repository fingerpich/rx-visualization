import {PropertyTypeEnum} from "./propertyType.enum";
export class PropertyType{
  name:string;
  type:PropertyTypeEnum;
  params:any;
  description:string;
  constructor(name,type,params=null,description=""){
    this.name=name;
    this.type=type;
    this.params=params;
    this.description=description;
  }
}
