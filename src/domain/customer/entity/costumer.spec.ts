import Address from "../value-object/address";
import Customer from "./customer";

describe("Costumer unit test", () => {

    it("Should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer('', "Epilef Dani");
        }).toThrowError("customer: Id is required");
    });

    it("Should throw error when name is empty", () => {
        expect(() => {
            let cust = new Customer('12345', "");
        }).toThrowError("customer: Name is required");
    });

    it("Should change name", () => {
        let customer = new Customer("123", "Rafael Daniel");
        customer.changeName("Marcelo Daniel");
        expect(customer.name).toBe("Marcelo Daniel");

    });

    it("Should activate customer", () => {
        let customer = new Customer("1", "Customer 1");
        let address = new Address("Street 1", 123, '04195120', 'São Paulo');
        customer.address = address;
        customer.activate();

        expect(customer.isActive()).toBe(true);

    });

    it("Should deactivate customer", () => {
        let customer = new Customer("1", "Customer 1");
        customer.deactivate();
        expect(customer.isActive()).toBe(false);

    });

    it("should throw error when address is undefined when you activate a customer", () => {
        expect(() => {
            const customer = new Customer("1", "Customer 1");
            customer.activate();
        }).toThrowError("customer: Address is Mandatory to activate a customer");

        let customer = new Customer("1", "Cust 01");
        let address = new Address("Street 1", 123, '04195120', 'São Paulo');
        customer.changeAddress(address);
        customer.activate();

        expect(customer.address).not.toBe(undefined);
    });

}); 