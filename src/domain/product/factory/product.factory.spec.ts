import ProductFactory from "./product.factory";

describe("Product factory unit test", () => {

    it("should create a product type a", () => {

        const product = ProductFactory.create("a", "Product A", 100.00);

        expect(product.id).toBeDefined();
        expect(product.name).toBe("Product A");
        expect(product.price).toBe(100.00);
        expect(product.constructor.name).toBe("Product");
    });

    it("should create a product type B", () => {

        const product = ProductFactory.create("b", "Product B", 50.00);

        expect(product.id).toBeDefined();
        expect(product.name).toBe("Product B");
        expect(product.price).toBe(100.00);
        expect(product.constructor.name).toBe("ProductB");
    });

    it("should throw an error when name is empty", () => {
        expect(() => {
            ProductFactory.create("a", "", 100.00);
        }).toThrowError("Name is required");
    });

}); 