import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit test", () => {

    it("should create a customer type a ", () => {

        const customer = CustomerFactory.create("Customer A");

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Customer A");
        expect(customer.constructor.name).toBe("Customer"); 
        expect(customer.address).toBeUndefined();

    }); 

    it("should create a customer with address ", () => {

        const customer = CustomerFactory.create("Customer A");
        customer.changeAddress(new Address("Street 1", 123, "Zipcode1", "City 1"));     

        expect(customer.id).toBeDefined();
        expect(customer.name).toBe("Customer A");
        expect(customer.constructor.name).toBe("Customer"); 
        expect(customer.address).toBeDefined();
    });
})