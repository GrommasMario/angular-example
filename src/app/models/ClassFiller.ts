export function FieldFiller<C>(pClass: { new (): C }) {
    return function fieldFilterDecorator(
        target: never,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {
        descriptor.value = undefined;
        descriptor.get = function getter(this: never) {
            const classEx = Reflect.construct(pClass, []);
            Object.assign(classEx, this[`__${propertyKey}`]);
        };
    };
}
