import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../../../../infrastructure/customer/repository/sequelize/customer.model";
import CustomerRepository from "../../../../infrastructure/customer/repository/sequelize/customer.repository";
import UpdateCustomerUseCase from "./update.customer.usecase";
import Customer from "../../../customer/entity/customer";
import Address from "../../../customer/value-object/address";

describe("Integration Test update customer", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([CustomerModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("Should update a customer", async () => {
        const customerRepository = new CustomerRepository();
        const usecase = new UpdateCustomerUseCase(customerRepository);

        const customer = new Customer("123", "Customer 1");
        const address = new Address("Street 1", 9781, "Zipcode1", "City 1");
        customer.changeAddress(address);

        await customerRepository.create(customer);

        const input = {
            id: "123",
            name: "Customer 2",
            address: {
                street: "Street 2",
                number: 9781,
                zip: "Zipcode2",
                city: "City 2"
            }
        }

        const output = {
            id: "123",
            name: "Customer 2",
            address: {
                street: "Street 2",
                number: 9781,
                zip: "Zipcode2",
                city: "City 2"
            }
        }

        const result = await usecase.execute(input);

        expect(result).toEqual(output);
    })


});