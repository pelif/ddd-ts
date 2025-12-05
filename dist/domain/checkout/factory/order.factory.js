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
import OrderItem from "../entity/order_item";
var OrderFactory = /*#__PURE__*/ function() {
    "use strict";
    function OrderFactory() {
        _class_call_check(this, OrderFactory);
    }
    _create_class(OrderFactory, null, [
        {
            key: "create",
            value: function create(props) {
                var items = props.items.map(function(item) {
                    return new OrderItem(item.id, item.name, item.price, item.productId, item.quantity);
                });
                return new Order(props.id, props.customerId, items);
            }
        }
    ]);
    return OrderFactory;
}();
export { OrderFactory as default };

//# sourceMappingURL=order.factory.js.map