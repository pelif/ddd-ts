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
var OrderItem = /*#__PURE__*/ function() {
    "use strict";
    function OrderItem(id, name, price, productId, quantity) {
        _class_call_check(this, OrderItem);
        _define_property(this, "_id", void 0);
        _define_property(this, "_productId", void 0);
        _define_property(this, "_name", void 0);
        _define_property(this, "_price", void 0);
        _define_property(this, "_quantity", void 0);
        _define_property(this, "_total", void 0);
        this._id = id;
        this._name = name;
        this._price = price;
        this._productId = productId;
        this._quantity = quantity;
        this._total = this.total();
    }
    _create_class(OrderItem, [
        {
            key: "id",
            get: function get() {
                return this._id;
            }
        },
        {
            key: "name",
            get: function get() {
                return this._name;
            }
        },
        {
            key: "productId",
            get: function get() {
                return this._productId;
            }
        },
        {
            key: "quantity",
            get: function get() {
                return this._quantity;
            }
        },
        {
            key: "price",
            get: function get() {
                return this._price;
            }
        },
        {
            key: "total",
            value: function total() {
                return this._price * this._quantity;
            }
        }
    ]);
    return OrderItem;
}();
export { OrderItem as default };

//# sourceMappingURL=order_item.js.map