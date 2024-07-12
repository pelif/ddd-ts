import Customer from "../../customer/entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit test", () => {

    it("should place an order", () => {

        const customer = new Customer("c1", "Customer 01"); 
        const item1 = new OrderItem("i1", "p1", 10.00, "p001", 1); 
        const order = OrderService.placeOrder(customer, [item1]); 

        expect(customer.rewardPoints).toBe(5); 
        expect(order.total()).toBe(10.00); 
    }); 
    
    it("should get total of all orders", () => {
        const item1 = new OrderItem("i1", "p1", 150.00, "p001", 1); 
        const item2 = new OrderItem("i2", "p2", 150.00, "p002", 2);
        
        const order1 = new Order("o1", "c1", [item1]); 
        const order2 = new Order("o2", "c2", [item2]); 

        const total = OrderService.total([order1, order2]); 

        expect(total).toBe(450); 
    });

}); 