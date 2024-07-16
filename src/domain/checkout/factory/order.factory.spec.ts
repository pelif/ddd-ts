import { v4 as uuid } from "uuid";
import OrderFactory from "./order.factory";

describe("Order factory unit test", () => {

    it("should create a order type a", () => {

        const orderProps = {
            id: uuid(),
            customerId: "c1",
            items: [
                {
                    id: uuid(),
                    name: "p1",
                    price: 10.00,
                    productId: uuid(),
                    quantity: 1
                }
            ]
        }; 

        const order = OrderFactory.create(orderProps);

        expect(order.id).toEqual(orderProps.id);
        expect(order.customerId).toEqual(orderProps.customerId)
        expect(order.items.length).toBe(1);

    });
}); 