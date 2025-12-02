import CreateProductUseCase from "./create.product.usecase";

const input = {
    type: "a",  // Use um tipo válido suportado pelo ProductFactory
    name: "Product 01",
    price: 100,
}

const MockRepository = () => {
    return {
        create: jest.fn(),
        update: jest.fn(),
        find: jest.fn(),
        findAll: jest.fn(),
    }
}

describe("Unit Test create product use case", () => {

    it("Should create a product", async () => {
        const productRepository = MockRepository();
        const usecase = new CreateProductUseCase(productRepository);

        const output = await usecase.execute(input);

        expect(output).toEqual({
            id: expect.any(String),
            name: input.name,
            price: input.price
        });

    });

    it("Should throw an error when name is missing", async () => {
        const productRepository = MockRepository();
        const usecase = new CreateProductUseCase(productRepository);

        input.name = "";

        await expect(usecase.execute(input))
            .rejects
            .toThrow("Name is required");
    });

    it("Should throw an error when price is missing", async () => {
        const productRepository = MockRepository();
        const usecase = new CreateProductUseCase(productRepository);

        input.price = 0;

        await expect(usecase.execute(input))
            .rejects
            .toThrow("Price must be greater than zero");
    });

});