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
import CustomerModel from "../../../customer/repository/sequelize/customer.model";
import CustomerRepository from "../../../customer/repository/sequelize/customer.repository";
import Customer from "../../../../domain/customer/entity/customer";
import Address from "../../../../domain/customer/value-object/address";
import OrderModel from "./order.model";
import OrderItemModel from "./order-item";
import ProductModel from "../../../product/repository/sequelize/product.model";
import ProductRepository from "../../../product/repository/sequelize/product.repository";
import Product from "../../../../domain/product/entity/product";
import OrderItem from "../../../../domain/checkout/entity/order_item";
import Order from "../../../../domain/checkout/entity/order";
import OrderRepository from "./order.repository";
describe("Order Repository Test", function() {
    var sequelize;
    beforeEach(function() {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        sequelize = new Sequelize({
                            dialect: 'sqlite',
                            storage: ':memory:',
                            logging: false,
                            sync: {
                                force: true
                            }
                        });
                        sequelize.addModels([
                            CustomerModel,
                            OrderModel,
                            OrderItemModel,
                            ProductModel
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
    it("should create a order", function() {
        return _async_to_generator(function() {
            var customerRepository, customer, address, productRepository, product, orderItem, order, orderRepository, orderModel;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        customerRepository = new CustomerRepository();
                        customer = new Customer("123", "Customer 1");
                        address = new Address("Street 1", 9781, "Zipcode1", "City 1");
                        customer.changeAddress(address);
                        return [
                            4,
                            customerRepository.create(customer)
                        ];
                    case 1:
                        _state.sent();
                        productRepository = new ProductRepository();
                        product = new Product("123", "Product 1", 10.00);
                        return [
                            4,
                            productRepository.create(product)
                        ];
                    case 2:
                        _state.sent();
                        orderItem = new OrderItem("1", product.name, product.price, product.id, 2);
                        order = new Order("123", "123", [
                            orderItem
                        ]);
                        orderRepository = new OrderRepository();
                        return [
                            4,
                            orderRepository.create(order)
                        ];
                    case 3:
                        _state.sent();
                        return [
                            4,
                            OrderModel.findOne({
                                where: {
                                    id: order.id
                                },
                                include: [
                                    "items"
                                ]
                            })
                        ];
                    case 4:
                        orderModel = _state.sent();
                        expect(orderModel.toJSON()).toStrictEqual({
                            id: "123",
                            customer_id: "123",
                            total: 20.00,
                            items: [
                                {
                                    id: orderItem.id,
                                    name: orderItem.name,
                                    price: orderItem.price,
                                    quantity: orderItem.quantity,
                                    order_id: "123",
                                    product_id: "123"
                                }
                            ]
                        });
                        return [
                            2
                        ];
                }
            });
        })();
    });
});

//# sourceMappingURL=order.repository.spec.js.map