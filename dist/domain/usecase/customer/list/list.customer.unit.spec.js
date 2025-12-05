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
import CustomerFactory from "../../../customer/factory/customer.factory";
import Address from "../../../customer/value-object/address";
import ListCustomerUseCase from "./list.customer.usecase";
var customer1 = CustomerFactory.createWithAddress("Customer 1", new Address("Street 1", 9781, "Zipcode1", "City 1"));
var customer2 = CustomerFactory.createWithAddress("Customer 2", new Address("Street 2", 9781, "Zipcode2", "City 2"));
var MockRepository = function() {
    return {
        create: jest.fn(),
        update: jest.fn(),
        find: jest.fn(),
        findAll: jest.fn().mockReturnValue(Promise.resolve([
            customer1,
            customer2
        ]))
    };
};
describe("Unit Test list customer use case", function() {
    it("Should list all customers", function() {
        return _async_to_generator(function() {
            var customerRepository, usecase, output;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        customerRepository = MockRepository();
                        usecase = new ListCustomerUseCase(customerRepository);
                        return [
                            4,
                            usecase.execute({})
                        ];
                    case 1:
                        output = _state.sent();
                        expect(output.customers.length).toBe(2);
                        expect(output.customers[0].id).toBe(customer1.id);
                        expect(output.customers[0].name).toBe(customer1.name);
                        expect(output.customers[0].address.street).toBe(customer1.address.street);
                        expect(output.customers[0].address.number).toBe(customer1.address.number);
                        expect(output.customers[0].address.zip).toBe(customer1.address.zip);
                        expect(output.customers[0].address.city).toBe(customer1.address.city);
                        expect(output.customers[1].id).toBe(customer2.id);
                        expect(output.customers[1].name).toBe(customer2.name);
                        expect(output.customers[1].address.street).toBe(customer2.address.street);
                        expect(output.customers[1].address.number).toBe(customer2.address.number);
                        expect(output.customers[1].address.zip).toBe(customer2.address.zip);
                        expect(output.customers[1].address.city).toBe(customer2.address.city);
                        return [
                            2
                        ];
                }
            });
        })();
    });
});

//# sourceMappingURL=list.customer.unit.spec.js.map