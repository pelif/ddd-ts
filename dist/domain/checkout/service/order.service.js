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
import Order from "../entity/order";
import { v4 as uuid } from "uuid";
var OrderService = /*#__PURE__*/ function() {
    "use strict";
    function OrderService() {
        _class_call_check(this, OrderService);
    }
    _create_class(OrderService, null, [
        {
            key: "placeOrder",
            value: function placeOrder(customer, items) {
                if (items.length === 0) {
                    throw new Error("Order must have at least one item");
                }
                var order = new Order(uuid(), customer.id, items);
                customer.addRewardPoints(order.total() / 2);
                return order;
            }
        },
        {
            key: "total",
            value: function total(orders) {
                return orders.reduce(function(acc, order) {
                    return acc + order.total();
                }, 0);
            }
        }
    ]);
    return OrderService;
}();
export { OrderService as default };

//# sourceMappingURL=order.service.js.map