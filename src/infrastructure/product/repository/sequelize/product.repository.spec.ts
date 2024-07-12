import { Sequelize } from "sequelize-typescript";
import ProductModel from "./product.model";
import Product from "../../../../domain/product/entity/product";
import ProductRepository from "./product.repository";

describe("Product Repository Test", () => {

    let sequelize: Sequelize; 

    beforeEach(async() => {
        sequelize = new Sequelize({
            dialect: 'sqlite', 
            storage: ':memory:', 
            logging: false, 
            sync: { force: true }, 
        });

        sequelize.addModels([ProductModel]); 
        await sequelize.sync();
    }); 

    afterEach(async() => {
        await sequelize.close();
    }); 

    it("should create a product", async() => {
        const productRepository = new ProductRepository(); 
        const product = new Product('p1', "product 01", 100); 

        await productRepository.create(product); 

        const productModel = await ProductModel.findOne({ where: {id: "p1"}}); 

        expect(productModel.toJSON()).toStrictEqual({
            id: "p1", 
            name: "product 01", 
            price: 100
        }); 
    }); 

    it("should update a product", async() => {
        const productRepository = new ProductRepository(); 
        const product = new Product('p1', "product 01", 100); 

        await productRepository.create(product); 

        const productModel = await ProductModel.findOne({ where: {id: "p1"}}); 

        expect(productModel.toJSON()).toStrictEqual({
            id: "p1", 
            name: "product 01", 
            price: 100
        }); 

        product.changeName("Product 02"); 
        product.changePrice(200); 

        await productRepository.update(product); 

        const productModel2 = await ProductModel.findOne({ where: { id: "p1"}}); 

        expect(productModel2.toJSON()).toStrictEqual({
            id: "p1", 
            name: "Product 02", 
            price: 200
        }); 

    }); 

    it("should find a product", async() => {
        const productRepository = new ProductRepository(); 
        const product = new Product("p1", "Product 01", 100); 

        await productRepository.create(product); 

        const productModel = await ProductModel.findOne({ where: { id: "p1"}}); 
        const foundProduct = await productRepository.find("p1"); 

        expect(productModel.toJSON()).toStrictEqual({
            id: foundProduct.id, 
            name: foundProduct.name, 
            price: foundProduct.price
        }); 
    }); 

    it("should find all product", async() => {
        const productRepository = new ProductRepository();
        const product = new Product("p1", "Product 01", 150); 
        await productRepository.create(product); 

        const product2 = new Product("p2", "Product 02", 180); 
        await productRepository.create(product2); 

        const foundProducts = await productRepository.findAll();
        const products = [product, product2]; 

        expect(products).toEqual(foundProducts); 

    }); 

}); 