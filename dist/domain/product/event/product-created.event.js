function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var ProductCreatedEvent = function ProductCreatedEvent(eventData) {
    "use strict";
    _class_call_check(this, ProductCreatedEvent);
    _define_property(this, "dateTimeOccurred", void 0);
    _define_property(this, "eventData", void 0);
    this.dateTimeOccurred = new Date();
    this.eventData = eventData;
};
export { ProductCreatedEvent as default };

//# sourceMappingURL=product-created.event.js.map