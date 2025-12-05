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
var ProductService = /*#__PURE__*/ function() {
    "use strict";
    function ProductService() {
        _class_call_check(this, ProductService);
    }
    _create_class(ProductService, null, [
        {
            key: "increasePrice",
            value: function increasePrice(products, percentage) {
                products.forEach(function(product) {
                    product.changePrice(product.price * percentage / 100 + product.price);
                });
                return products;
            }
        }
    ]);
    return ProductService;
}();
export { ProductService as default };

//# sourceMappingURL=product.service.js.map