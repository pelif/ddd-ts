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
var Order = /*#__PURE__*/ function() {
    "use strict";
    function Order(id, customerId, items) {
        _class_call_check(this, Order);
        _define_property(this, "_id", void 0);
        _define_property(this, "_customerId", void 0);
        _define_property(this, "_items", void 0);
        _define_property(this, "_total", void 0);
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }
    _create_class(Order, [
        {
            key: "id",
            get: function get() {
                return this._id;
            }
        },
        {
            key: "customerId",
            get: function get() {
                return this._customerId;
            }
        },
        {
            key: "items",
            get: function get() {
                return this._items;
            }
        },
        {
            key: "validate",
            value: function validate() {
                if (this._id.length === 0) {
                    throw new Error("Id is required");
                }
                if (this._customerId.length === 0) {
                    throw new Error("CustomerId is required");
                }
                if (this._items.length === 0) {
                    throw new Error("Items are required");
                }
                if (this._items.some(function(item) {
                    return item.quantity <= 0;
                })) {
                    throw new Error("Quantity must be greater than 0");
                }
                return true;
            }
        },
        {
            key: "total",
            value: function total() {
                return this._items.reduce(function(acc, item) {
                    return acc + item.total();
                }, 0);
            }
        }
    ]);
    return Order;
}();
export { Order as default };

//# sourceMappingURL=order.js.map