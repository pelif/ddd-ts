import CustomerFactory from "../../../customer/factory/customer.factory";
import Address from "../../../customer/value-object/address";
import UpdateCustomerUseCase from "./update.customer.usecase";

const customer = CustomerFactory.createWithAddress("Customer 1", new Address(
    "Street 1", 9781, "Zipcode1", "City 1"
));

const input = {
    id: customer.id,
    name: "Customer Updated",
    address: {
        street: "Street Updated",
        number: 9781,
        zip: "Zipcode Updated",
        city: "City Updated"
    }
}

const MockRepository = () => {
    return {
        create: jest.fn(),
        update: jest.fn(),
        find: jest.fn().mockReturnValue(Promise.resolve(customer)),
        findAll: jest.fn(),
    }
}

describe("Unit Test update customer use case", () => {
    it("Should update a customer", async () => {
        const customerRepository = MockRepository();
        const usecase = new UpdateCustomerUseCase(customerRepository);

        const output = await usecase.execute(input);

        expect(output).toEqual(input);
    });
});


