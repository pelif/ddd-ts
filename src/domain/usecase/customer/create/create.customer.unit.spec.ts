import CreateCustomerUseCase from "./create.customer.usecase";

const input = {
    name: "Customer 1",
    address: {
        street: "Street 1",
        number: 9781,
        zip: "Zipcode1",
        city: "City 1"
    }
}

const MockRepository = () => {
    return {
        create: jest.fn(),
        update: jest.fn(),
        find: jest.fn(),
        findAll: jest.fn(),
    }
}

describe("Unit Test create customer use case", () => {

    it("Should create a customer", async () => {
        const customerRepository = MockRepository();
        const usecase = new CreateCustomerUseCase(customerRepository);

        const output = await usecase.execute(input);

        expect(output).toEqual({
            id: expect.any(String),
            name: input.name,
            address: {
                street: input.address.street,
                number: input.address.number,
                zip: input.address.zip,
                city: input.address.city
            }
        });

    });

    it("Should Throw an error when name is missing", async () => {
        const customerRepository = MockRepository();
        const usecase = new CreateCustomerUseCase(customerRepository);

        input.name = "";

        await expect(usecase.execute(input))
            .rejects
            .toThrow("Name is required");
    });

    it("Should Throw an error when address street is missing", async () => {
        const customerRepository = MockRepository();
        const usecase = new CreateCustomerUseCase(customerRepository);

        input.address.street = "";

        await expect(usecase.execute(input))
            .rejects
            .toThrow("Street is required");
    });



});
