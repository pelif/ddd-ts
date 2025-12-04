import { app, sequelize } from '../express';
import request from 'supertest';

describe("E2E test for Customer", () => {

    beforeEach(async () => {
        await sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it("Should create a customer", async () => {
        const response = await request(app)
            .post('/customer')
            .send({
                name: "Customer 1",
                address: {
                    street: "Street 1",
                    number: 1,
                    zip: "12345678",
                    city: "City 1",
                }
            });

        expect(response.status).toBe(200);
        expect(response.body.name).toBe("Customer 1");
        expect(response.body.address.street).toBe("Street 1");
        expect(response.body.address.number).toBe(1);
        expect(response.body.address.city).toBe("City 1");
        expect(response.body.address.zip).toBe("12345678");
    });

    it("Should not create a customer with invalid name", async () => {
        const response = await request(app)
            .post('/customer')
            .send({
                name: "",
                address: {
                    street: "Street 1",
                    number: 1,
                    zip: "12345678",
                    city: "City 1",
                }
            });

        expect(response.status).toBe(500);
    });

    it("Should  list all customers", async () => {
        const response = await request(app)
            .post('/customer')
            .send({
                name: "Customer 1",
                address: {
                    street: "Street 1",
                    number: 1,
                    zip: "12345678",
                    city: "City 1",
                }
            });

        expect(response.status).toBe(200);

        const response2 = await request(app)
            .post('/customer')
            .send({
                name: "Customer 2",
                address: {
                    street: "Street 2",
                    number: 2,
                    zip: "12345678",
                    city: "City 2",
                }
            });

        expect(response2.status).toBe(200);

        const listResponse = await request(app)
            .get('/customer')
            .send();

        expect(listResponse.status).toBe(200);
        expect(listResponse.body.customers.length).toBe(2);

        const customer = listResponse.body.customers[0];
        expect(customer.id).toBe(response.body.id);
        expect(customer.name).toBe("Customer 1");
        expect(customer.address.street).toBe("Street 1");
        expect(customer.address.number).toBe(1);
        expect(customer.address.city).toBe("City 1");
        expect(customer.address.zip).toBe("12345678");

        const customer2 = listResponse.body.customers[1];
        expect(customer2.id).toBe(response2.body.id);
        expect(customer2.name).toBe("Customer 2");
        expect(customer2.address.street).toBe("Street 2");
        expect(customer2.address.number).toBe(2);
        expect(customer2.address.city).toBe("City 2");
        expect(customer2.address.zip).toBe("12345678");
    });
}); 