import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../../../../infrastructure/customer/repository/sequelize/customer.model";
import CustomerRepository from "../../../../infrastructure/customer/repository/sequelize/customer.repository";
import ListCustomerUseCase from "./list.customer.usecase";
import Customer from "../../../customer/entity/customer";
import Address from "../../../customer/value-object/address";

describe("Integration Test list customers", () => {
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

    it("should list customers", async () => {
        const customerRepository = new CustomerRepository();
        const usecase = new ListCustomerUseCase(customerRepository);

        const customer1 = new Customer("123", "Customer 1");
        const address1 = new Address("Street 1", 1, "Zipcode 1", "City 1");
        customer1.changeAddress(address1);

        const customer2 = new Customer("456", "Customer 2");
        const address2 = new Address("Street 2", 2, "Zipcode 2", "City 2");
        customer2.changeAddress(address2);

        await customerRepository.create(customer1);
        await customerRepository.create(customer2);

        const output = {
            customers: [
                {
                    id: "123",
                    name: "Customer 1",
                    address: {
                        street: "Street 1",
                        number: 1,
                        zip: "Zipcode 1",
                        city: "City 1"
                    }
                },
                {
                    id: "456",
                    name: "Customer 2",
                    address: {
                        street: "Street 2",
                        number: 2,
                        zip: "Zipcode 2",
                        city: "City 2"
                    }
                }
            ]
        }

        const result = await usecase.execute({});

        expect(result).toEqual(output);
    });
});