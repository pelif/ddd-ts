import { app, sequelize } from '../express';
import request from 'supertest';

describe("E2E test for Product", () => {
    beforeEach(async () => {
        await sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it("Should create a product", async () => {
        const response = await request(app)
            .post('/product')
            .send({
                name: "Product 1",
                price: 10,
                type: "a"
            });

        expect(response.status).toBe(200);
        expect(response.body.name).toBe("Product 1");
        expect(response.body.price).toBe(10);
        expect(response.body.type).toBe("a");
    });

    it("Should not create a product with invalid params", async () => {
        const response = await request(app)
            .post('/product')
            .send({
                name: "",
                price: -10,
                type: "a"
            });

        expect(response.status).toBe(500);
    });

    it("Should list all products", async () => {
        const response = await request(app)
            .post('/product')
            .send({
                name: "Product 1",
                price: 10,
                type: "a"
            });

        const response2 = await request(app)
            .post('/product')
            .send({
                name: "Product 2",
                price: 20,
                type: "b"
            });

        const responseList = await request(app)
            .get('/product');

        expect(responseList.status).toBe(200);
        expect(responseList.body.products.length).toBe(2);
    });
}); 