import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../../../../infrastructure/customer/repository/sequelize/customer.model";
import CustomerRepository from "../../../../infrastructure/customer/repository/sequelize/customer.repository";
import CreateCustomerUseCase from "./create.customer.usecase";

describe("Integration Test create customer", () => {
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

    it("Should create a customer", async () => {
        const customerRepository = new CustomerRepository();
        const usecase = new CreateCustomerUseCase(customerRepository);

        const input = {
            name: "Customer 1",
            address: {
                street: "Street 1",
                number: 9781,
                zip: "Zipcode 1",
                city: "City 1"
            }
        }

        const output = await usecase.execute(input);

        expect(output.id).toBeDefined();
        expect(output.name).toBe(input.name);
        expect(output.address.street).toBe(input.address.street);
        expect(output.address.number).toBe(input.address.number);
        expect(output.address.zip).toBe(input.address.zip);
        expect(output.address.city).toBe(input.address.city);
    });
});