function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import Customer from "../../../../domain/customer/entity/customer";
import Address from "../../../../domain/customer/value-object/address";
import CustomerModel from "./customer.model";
var CustomerRepository = /*#__PURE__*/ function() {
    "use strict";
    function CustomerRepository() {
        _class_call_check(this, CustomerRepository);
    }
    _create_class(CustomerRepository, [
        {
            key: "create",
            value: function create(customer) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    CustomerModel.create({
                                        id: customer.id,
                                        name: customer.name,
                                        street: customer.address.street,
                                        number: customer.address.number,
                                        zipcode: customer.address.zip,
                                        city: customer.address.city,
                                        active: customer.isActive(),
                                        rewardPoints: customer.rewardPoints
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "update",
            value: function update(entity) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    CustomerModel.update({
                                        name: entity.name,
                                        street: entity.address.street,
                                        number: entity.address.number,
                                        zip: entity.address.zip,
                                        city: entity.address.city,
                                        active: entity.isActive(),
                                        rewardPoints: entity.rewardPoints
                                    }, {
                                        where: {
                                            id: entity.id
                                        }
                                    })
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "find",
            value: function find(id) {
                return _async_to_generator(function() {
                    var customerModel, error, customer, address;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    CustomerModel.findOne({
                                        where: {
                                            id: id
                                        },
                                        rejectOnEmpty: true
                                    })
                                ];
                            case 1:
                                customerModel = _state.sent();
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                throw new Error("Customer not found...");
                            case 3:
                                customer = new Customer(id, customerModel.name);
                                address = new Address(customerModel.street, customerModel.number, customerModel.zipcode, customerModel.city);
                                customer.changeAddress(address);
                                return [
                                    2,
                                    customer
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "findAll",
            value: function findAll() {
                return _async_to_generator(function() {
                    var customerModels, customers;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    CustomerModel.findAll()
                                ];
                            case 1:
                                customerModels = _state.sent();
                                customers = customerModels.map(function(customerModels) {
                                    var customer = new Customer(customerModels.id, customerModels.name);
                                    customer.addRewardPoints(customerModels.rewardPoints);
                                    var address = new Address(customerModels.street, customerModels.number, customerModels.zipcode, customerModels.city);
                                    customer.changeAddress(address);
                                    if (customerModels.active) {
                                        customer.activate();
                                    }
                                    return customer;
                                });
                                return [
                                    2,
                                    customers
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return CustomerRepository;
}();
export { CustomerRepository as default };

//# sourceMappingURL=customer.repository.js.map