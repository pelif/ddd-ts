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
import ProductModel from "./product.model";
import Product from "../../../../domain/product/entity/product";
import ProductRepository from "./product.repository";
describe("Product Repository Test", function() {
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
    it("should create a product", function() {
        return _async_to_generator(function() {
            var productRepository, product, productModel;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        productRepository = new ProductRepository();
                        product = new Product('p1', "product 01", 100);
                        return [
                            4,
                            productRepository.create(product)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            ProductModel.findOne({
                                where: {
                                    id: "p1"
                                }
                            })
                        ];
                    case 2:
                        productModel = _state.sent();
                        expect(productModel.toJSON()).toStrictEqual({
                            id: "p1",
                            name: "product 01",
                            price: 100
                        });
                        return [
                            2
                        ];
                }
            });
        })();
    });
    it("should update a product", function() {
        return _async_to_generator(function() {
            var productRepository, product, productModel, productModel2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        productRepository = new ProductRepository();
                        product = new Product('p1', "product 01", 100);
                        return [
                            4,
                            productRepository.create(product)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            ProductModel.findOne({
                                where: {
                                    id: "p1"
                                }
                            })
                        ];
                    case 2:
                        productModel = _state.sent();
                        expect(productModel.toJSON()).toStrictEqual({
                            id: "p1",
                            name: "product 01",
                            price: 100
                        });
                        product.changeName("Product 02");
                        product.changePrice(200);
                        return [
                            4,
                            productRepository.update(product)
                        ];
                    case 3:
                        _state.sent();
                        return [
                            4,
                            ProductModel.findOne({
                                where: {
                                    id: "p1"
                                }
                            })
                        ];
                    case 4:
                        productModel2 = _state.sent();
                        expect(productModel2.toJSON()).toStrictEqual({
                            id: "p1",
                            name: "Product 02",
                            price: 200
                        });
                        return [
                            2
                        ];
                }
            });
        })();
    });
    it("should find a product", function() {
        return _async_to_generator(function() {
            var productRepository, product, productModel, foundProduct;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        productRepository = new ProductRepository();
                        product = new Product("p1", "Product 01", 100);
                        return [
                            4,
                            productRepository.create(product)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            ProductModel.findOne({
                                where: {
                                    id: "p1"
                                }
                            })
                        ];
                    case 2:
                        productModel = _state.sent();
                        return [
                            4,
                            productRepository.find("p1")
                        ];
                    case 3:
                        foundProduct = _state.sent();
                        expect(productModel.toJSON()).toStrictEqual({
                            id: foundProduct.id,
                            name: foundProduct.name,
                            price: foundProduct.price
                        });
                        return [
                            2
                        ];
                }
            });
        })();
    });
    it("should find all product", function() {
        return _async_to_generator(function() {
            var productRepository, product, product2, foundProducts, products;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        productRepository = new ProductRepository();
                        product = new Product("p1", "Product 01", 150);
                        return [
                            4,
                            productRepository.create(product)
                        ];
                    case 1:
                        _state.sent();
                        product2 = new Product("p2", "Product 02", 180);
                        return [
                            4,
                            productRepository.create(product2)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            productRepository.findAll()
                        ];
                    case 3:
                        foundProducts = _state.sent();
                        products = [
                            product,
                            product2
                        ];
                        expect(products).toEqual(foundProducts);
                        return [
                            2
                        ];
                }
            });
        })();
    });
});

//# sourceMappingURL=product.repository.spec.js.map