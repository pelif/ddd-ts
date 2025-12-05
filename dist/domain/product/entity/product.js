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
var Product = /*#__PURE__*/ function() {
    "use strict";
    function Product(id, name, price) {
        _class_call_check(this, Product);
        _define_property(this, "_id", void 0);
        _define_property(this, "_name", void 0);
        _define_property(this, "_price", void 0);
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }
    _create_class(Product, [
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
            key: "price",
            get: function get() {
                return this._price;
            }
        },
        {
            key: "validate",
            value: function validate() {
                if (this._id.length === 0) {
                    throw new Error("Id is required");
                }
                if (this._name.length === 0) {
                    throw new Error("Name is required");
                }
                if (this._price <= 0) {
                    throw new Error("Price must be greater than zero");
                }
                return true;
            }
        },
        {
            key: "changeName",
            value: function changeName(name) {
                this._name = name;
                this.validate();
            }
        },
        {
            key: "changePrice",
            value: function changePrice(price) {
                this._price = price;
                this.validate();
            }
        }
    ]);
    return Product;
}();
export { Product as default };

//# sourceMappingURL=product.js.map