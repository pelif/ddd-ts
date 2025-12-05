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
var Address = /*#__PURE__*/ function() {
    "use strict";
    function Address(street, number, zip, city) {
        _class_call_check(this, Address);
        _define_property(this, "_street", "");
        _define_property(this, "_number", 0);
        _define_property(this, "_zip", "");
        _define_property(this, "_city", "");
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._city = city;
        this.validate();
    }
    _create_class(Address, [
        {
            key: "street",
            get: function get() {
                return this._street;
            }
        },
        {
            key: "number",
            get: function get() {
                return this._number;
            }
        },
        {
            key: "zip",
            get: function get() {
                return this._zip;
            }
        },
        {
            key: "city",
            get: function get() {
                return this._city;
            }
        },
        {
            key: "validate",
            value: function validate() {
                if (this._street.length === 0) {
                    throw new Error("Street is required");
                }
                if (this._number === 0) {
                    throw new Error("Number is required");
                }
                if (this._zip.length === 0) {
                    throw new Error("Zip is required");
                }
                if (this._city.length === 0) {
                    throw new Error("City is required");
                }
            }
        },
        {
            key: "toString",
            value: function toString() {
                return "".concat(this._street, " ").concat(this._number, " ").concat(this._zip, " ").concat(this._city);
            }
        }
    ]);
    return Address;
}();
export { Address as default };

//# sourceMappingURL=address.js.map