function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
import Entity from "../../@shared/entity/entity.abstract";
var Customer = /*#__PURE__*/ function(Entity) {
    "use strict";
    _inherits(Customer, Entity);
    function Customer(id, name) {
        _class_call_check(this, Customer);
        var _this;
        _this = _call_super(this, Customer), _define_property(_this, "_name", void 0), _define_property(_this, "_address", void 0), _define_property(_this, "_active", true), _define_property(_this, "_rewardPoints", 0);
        _this._id = id;
        _this._name = name;
        _this.validate();
        return _this;
    }
    _create_class(Customer, [
        {
            key: "name",
            get: function get() {
                return this._name;
            }
        },
        {
            key: "rewardPoints",
            get: function get() {
                return this._rewardPoints;
            }
        },
        {
            key: "address",
            get: function get() {
                return this._address;
            },
            set: function set(address) {
                this._address = address;
            }
        },
        {
            key: "isActive",
            value: function isActive() {
                return this._active;
            }
        },
        {
            key: "validate",
            value: function validate() {
                if (this._name.length === 0) {
                    this.notification.addError({
                        context: "customer",
                        message: "Id is required"
                    });
                }
                if (this._id.length === 0) {
                    this.notification.addError({
                        context: "customer",
                        message: "Name is required"
                    });
                }
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
            key: "changeAddress",
            value: function changeAddress(address) {
                this._address = address;
            }
        },
        {
            key: "activate",
            value: function activate() {
                if (this._address === undefined) {
                    throw new Error("Address is Mandatory to activate a customer");
                }
                this._active = true;
            }
        },
        {
            key: "deactivate",
            value: function deactivate() {
                this._active = false;
            }
        },
        {
            key: "addRewardPoints",
            value: function addRewardPoints(points) {
                this._rewardPoints += points;
            }
        }
    ]);
    return Customer;
}(Entity);
export { Customer as default };

//# sourceMappingURL=customer.js.map