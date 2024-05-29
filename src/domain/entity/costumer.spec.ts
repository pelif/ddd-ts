import Address from "./address";
import Customer from "./customer";

describe("Costumer unit test", () => {

    it("Should throw error when id is empty", () => {
        expect(() => {
            let cust = new Customer('', "Felipe Dani"); 
        }).toThrowError("Id is required"); 
    }); 

    it("Should throw error when name is empty", () => {
        expect(() => {
            let cust = new Customer('12345', ""); 
        }).toThrowError("Name is required"); 
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
        // expect(() => {
        //   const customer = new Customer("1", "Customer 1");
        //   customer.activate();
        // }).toThrowError("Address is mandatory to activate a customer");

        // let customer = new Customer("1", "Cust 01"); 
        // let address = new Address("Street 1", 123, '04195120', 'São Paulo'); 
        // customer.Address = address; 
        // customer.activate();

        // expect(customer.Address).not.toBe(undefined); 
    });
    
}); 