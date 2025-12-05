import Product from "./product";
describe("Product unit test", function() {
    it("Should throw error when id is empty", function() {
        expect(function() {
            var product = new Product("", "Product 01", 100);
        }).toThrowError("Id is required");
    });
    it("Should throw error when name is empty", function() {
        expect(function() {
            var product = new Product("001", "", 100);
        }).toThrowError("Name is required");
    });
    it("Should throw error when price less than zero", function() {
        expect(function() {
            var product = new Product("001", "Product 01", 0);
        }).toThrowError("Price must be greater than zero");
    });
    it("should change name", function() {
        var product = new Product("123", "Product Test", 140);
        product.changeName("Product Test 02");
        expect(product.name).toBe("Product Test 02");
    });
    it("should change price", function() {
        var product = new Product("123", "Product Test", 140);
        product.changePrice(155);
        expect(product.price).toBe(155);
    });
});

//# sourceMappingURL=product.spec.js.map