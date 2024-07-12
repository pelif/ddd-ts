import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    // it("should throw error when id is empty", () => {
    //     expect(() => {
    //         let order = new Order("", "123", []); 

    //     }).toThrowError("Id is required"); 
    // }); 

    // it("should throw error when customerID is empty", () => {
    //     expect(() => {
    //         let order = new Order("123", "", []); 

    //     }).toThrowError("CustomerID is required"); 
    // }); 

    // it("should throw error when Items qtd Don't is greater than 0", () => {
    //     expect(() => {
    //         let order = new Order("123", "123", []); 

    //     }).toThrowError("Items qtd must be greater than 0"); 
    // }); 

    it("calculate total", () => {
        const item = new OrderItem('i1', "ITEM 01", 150.00, 'P001', 1);         
        const item2 = new OrderItem('i2', 'ITEM  02', 50.00, 'Item P002', 1) ; 
        const order = new Order('o1','c1',[item]);        

        let total = order.total();

        expect(total).toBe(150); 

        const order2 = new Order('o2', 'c2', [item, item2]); 
        total = order2.total();
        expect(total).toBe(200); 

    }); 
    
}); 