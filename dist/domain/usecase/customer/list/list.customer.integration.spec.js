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
import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../../../../infrastructure/customer/repository/sequelize/customer.model";
import CustomerRepository from "../../../../infrastructure/customer/repository/sequelize/customer.repository";
import ListCustomerUseCase from "./list.customer.usecase";
import Customer from "../../../customer/entity/customer";
import Address from "../../../customer/value-object/address";
describe("Integration Test list customers", function() {
    var sequelize;
    beforeEach(function() {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        sequelize = new Sequelize({
                            dialect: "sqlite",
                            storage: ":memory:",
                            logging: false,
                            sync: {
                                force: true
                            }
                        });
                        sequelize.addModels([
                            CustomerModel
                        ]);
                        return [
                            4,
                            sequelize.sync()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        })();
    });
    afterEach(function() {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            sequelize.close()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        })();
    });
    it("should list customers", function() {
        return _async_to_generator(function() {
            var customerRepository, usecase, customer1, address1, customer2, address2, output, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        customerRepository = new CustomerRepository();
                        usecase = new ListCustomerUseCase(customerRepository);
                        customer1 = new Customer("123", "Customer 1");
                        address1 = new Address("Street 1", 1, "Zipcode 1", "City 1");
                        customer1.changeAddress(address1);
                        customer2 = new Customer("456", "Customer 2");
                        address2 = new Address("Street 2", 2, "Zipcode 2", "City 2");
                        customer2.changeAddress(address2);
                        return [
                            4,
                            customerRepository.create(customer1)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            customerRepository.create(customer2)
                        ];
                    case 2:
                        _state.sent();
                        output = {
                            customers: [
                                {
                                    id: "123",
                                    name: "Customer 1",
                                    address: {
                                        street: "Street 1",
                                        number: 1,
                                        zip: "Zipcode 1",
                                        city: "City 1"
                                    }
                                },
                                {
                                    id: "456",
                                    name: "Customer 2",
                                    address: {
                                        street: "Street 2",
                                        number: 2,
                                        zip: "Zipcode 2",
                                        city: "City 2"
                                    }
                                }
                            ]
                        };
                        return [
                            4,
                            usecase.execute({})
                        ];
                    case 3:
                        result = _state.sent();
                        expect(result).toEqual(output);
                        return [
                            2
                        ];
                }
            });
        })();
    });
});

//# sourceMappingURL=list.customer.integration.spec.js.map