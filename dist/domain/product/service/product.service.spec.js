import Product from "../entity/product";
import ProductService from "./product.service";
describe("Product service unit tests", function() {
    it("should change the prices of all products", function() {
        var product1 = new Product("01", "product1", 10);
        var product2 = new Product("02", "product2", 20);
        var products = [
            product1,
            product2
        ];
        ProductService.increasePrice(products, 100);
        expect(product1.price).toBe(20);
        expect(product2.price).toBe(40);
    });
});

//# sourceMappingURL=product.service.spec.js.map