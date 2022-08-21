export function FieldFiller<C>(pClass: { new(): C }) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.value = undefined;
    descriptor.get = function () {
      const classEx = Reflect.construct(pClass, [])
      Object.assign(classEx, (<any>this)["__"+propertyKey])
    }
  };
}
