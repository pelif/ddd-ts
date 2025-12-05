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
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
import { Table, Model, PrimaryKey, Column } from "sequelize-typescript";
var CustomerModel = /*#__PURE__*/ function(Model) {
    "use strict";
    _inherits(CustomerModel, Model);
    function CustomerModel() {
        _class_call_check(this, CustomerModel);
        return _call_super(this, CustomerModel, arguments);
    }
    return CustomerModel;
}(Model);
export { CustomerModel as default };
_ts_decorate([
    PrimaryKey,
    Column,
    _ts_metadata("design:type", String)
], CustomerModel.prototype, "id", void 0);
_ts_decorate([
    Column({
        allowNull: false
    }),
    _ts_metadata("design:type", String)
], CustomerModel.prototype, "name", void 0);
_ts_decorate([
    Column({
        allowNull: false
    }),
    _ts_metadata("design:type", String)
], CustomerModel.prototype, "street", void 0);
_ts_decorate([
    Column({
        allowNull: false
    }),
    _ts_metadata("design:type", Number)
], CustomerModel.prototype, "number", void 0);
_ts_decorate([
    Column({
        allowNull: false
    }),
    _ts_metadata("design:type", String)
], CustomerModel.prototype, "zipcode", void 0);
_ts_decorate([
    Column({
        allowNull: false
    }),
    _ts_metadata("design:type", String)
], CustomerModel.prototype, "city", void 0);
_ts_decorate([
    Column({
        allowNull: false
    }),
    _ts_metadata("design:type", Boolean)
], CustomerModel.prototype, "active", void 0);
_ts_decorate([
    Column({
        allowNull: false
    }),
    _ts_metadata("design:type", Number)
], CustomerModel.prototype, "rewardPoints", void 0);
CustomerModel = _ts_decorate([
    Table({
        tableName: "customers",
        timestamps: false
    })
], CustomerModel);

//# sourceMappingURL=customer.model.js.map