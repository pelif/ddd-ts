import ProductFactory from "../../../product/factory/product.factory";
import UpdateProductUseCase from "./update.product.usecase";

const product = ProductFactory.create("a", "Product 1", 10);

const input = {
    id: product.id,
    name: "Product 2",
    price: 20,
};

const MockRepository = () => {
    return {
        create: jest.fn(),
        update: jest.fn(),
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
        findAll: jest.fn(),
    }
}

describe("Unit Test update product use case", () => {
    it("Should update a product", async () => {
        const productRepository = MockRepository();
        const usecase = new UpdateProductUseCase(productRepository);

        const output = await usecase.execute(input);

        expect(output.id).toBe(product.id);
        expect(output.name).toBe(input.name);
        expect(output.price).toBe(input.price);
    });
});

