function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
import Customer from "../entity/customer";
import { v4 as uuid } from "uuid";
var CustomerFactory = /*#__PURE__*/ function() {
    "use strict";
    function CustomerFactory() {
        _class_call_check(this, CustomerFactory);
    }
    _create_class(CustomerFactory, null, [
        {
            key: "create",
            value: function create(name) {
                return new Customer(uuid(), name);
            }
        },
        {
            key: "createWithAddress",
            value: function createWithAddress(name, address) {
                var customer = new Customer(uuid(), name);
                customer.changeAddress(address);
                return customer;
            }
        }
    ]);
    return CustomerFactory;
}();
export { CustomerFactory as default };

//# sourceMappingURL=customer.factory.js.map