import {PropertyTypeEnum} from './propertyType.enum';
export class PropertyType {
  name: string;
  type: PropertyTypeEnum;
  params: any;
  description: string;
  constructor(name, type, params = null, description = '') {
    this.name = name;
    this.type = type;
    this.params = params;
    this.description = description;
  }
  isNumber() {
    return this.type === PropertyTypeEnum.Number;
  }
  isString() {
    return this.type === PropertyTypeEnum.String;
  }
  isMethod() {
    return this.type === PropertyTypeEnum.Method;
  }
  isObject() {
    return this.type === PropertyTypeEnum.Object;
  }
  isList() {
    return this.type === PropertyTypeEnum.List;
  }
}
