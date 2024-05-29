import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../db/sequelize/model/customer.model";
import CustomerRepository from "./customer.repository";
import Customer from "../../domain/entity/customer";
import Address from "../../domain/entity/address";

describe("Customer Repository Test", () => {

    let sequelize: Sequelize; 

    beforeEach(async() => {
        sequelize = new Sequelize({
            dialect: 'sqlite', 
            storage: ':memory:', 
            logging: false, 
            sync: { force: true }, 
        });

        sequelize.addModels([CustomerModel]); 
        await sequelize.sync();
    }); 

    afterEach(async() => {
        await sequelize.close();
    }); 

    it("should create a customer", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer("123", "Customer 1");
        const address = new Address("Street 1", 9781, "Zipcode1", "City 1");
        customer.address = address;
      
        await customerRepository.create(customer);
          
        const customerModel = await CustomerModel.findOne({ where: { id: "123" } });

        expect(customerModel.toJSON()).toStrictEqual({
          id: "123",
          name: customer.name,
          active: customer.isActive(),
          rewardPoints: customer.rewardPoints,
          street: address.street,
          number: address.number,
          zipcode: address.zip,
          city: address.city,
        });
      });

    it("should update a customer", async() => {

        const customerRepository = new CustomerRepository(); 
        const customer = new Customer("123", "Customer 001"); 
        const address = new Address("Street of river", 101, "04195-120", "São Paulo"); 
        customer.address = address;
        await customerRepository.create(customer); 

        customer.changeName("Customer 002"); 
        await customerRepository.update(customer); 

        const customerModel = await CustomerModel.findOne({ where: { id: "123" }}); 

        expect(customerModel.toJSON()).toStrictEqual({
            id: "123", 
            name: customer.name, 
            active: customer.isActive(), 
            rewardPoints: customer.rewardPoints, 
            street: address.street, 
            number: address.number, 
            zipcode: address.zip, 
            city: address.city
        }); 

    });
    
    it("should find a customer", async() => {
        const customerRepository = new CustomerRepository(); 
        const customer = new Customer("123", "Customer 001"); 
        const address = new Address("Street 01", 111, "04280-000", "São Paulo"); 
        customer.address = address; 
        await customerRepository.create(customer);
        
        const foundCustomer = await customerRepository.find("123"); 

        expect(customer).toStrictEqual(foundCustomer); 
    }); 

    it("should find all customers", async() => {

        const customerRepository = new CustomerRepository();
        const customer1 = new Customer("123", "Customer 001"); 
        const address1 = new Address("Street 01", 1001, "04195-120", "São Paulo"); 
        customer1.address = address1; 
        customer1.addRewardPoints(10); 
        customer1.activate();

        const customer2 = new Customer("456", "Customer 02"); 
        const address2 = new Address("Street 02", 1002, "02990-000", "São Paulo"); 
        customer2.address = address2; 
        customer2.addRewardPoints(20); 

        await customerRepository.create(customer1); 
        await customerRepository.create(customer2); 

        const customers = await customerRepository.findAll();

        expect(customers).toHaveLength(2); 
        expect(customers).toContainEqual(customer1); 
        expect(customers).toContainEqual(customer2); 

    }); 




}); 