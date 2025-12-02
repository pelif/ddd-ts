import Product from "../../../product/entity/product";
import { v4 as uuid } from "uuid";
import FindProductUseCase from "./find.product.usecase";

const product = new Product(uuid(), "Product 1", 10);

const MockRepository = () => {
    return {
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn()
    }
}

describe("Test find product use case", () => {

    it("Should find a product", async () => {

        const productRepository = MockRepository();
        const usecase = new FindProductUseCase(productRepository);

        const input = {
            id: product.id,
        }

        const output = {
            id: expect.any(String),
            name: "Product 1",
            price: 10
        }

        const result = await usecase.execute(input);

        expect(result).toEqual(output);
    });



    it("Should throw an error when product is not found", async () => {

        const productRepository = MockRepository();
        productRepository.find.mockImplementationOnce(() => {
            throw new Error("Product not found");
        });
        const usecase = new FindProductUseCase(productRepository);

        const input = {
            id: uuid()
        }

        await expect(usecase.execute(input))
            .rejects
            .toThrow("Product not found");
    });

}); 