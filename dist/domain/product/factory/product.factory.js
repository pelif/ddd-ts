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
import Product from "../entity/product";
import { v4 as uuid } from "uuid";
import ProductB from "../entity/product-b";
var ProductFactory = /*#__PURE__*/ function() {
    "use strict";
    function ProductFactory() {
        _class_call_check(this, ProductFactory);
    }
    _create_class(ProductFactory, null, [
        {
            key: "create",
            value: function create(type, name, price) {
                switch(type){
                    case "a":
                        return new Product(uuid(), name, price);
                    case "b":
                        return new ProductB(uuid(), name, price);
                    default:
                        throw new Error("Product type not supported");
                }
            }
        }
    ]);
    return ProductFactory;
}();
export { ProductFactory as default };

//# sourceMappingURL=product.factory.js.map