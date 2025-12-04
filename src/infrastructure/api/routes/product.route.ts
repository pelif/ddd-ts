import express, { Request, Response } from 'express';
import CreateProductUseCase from '../../../domain/usecase/product/create/create.product.usecase';
import ProductRepository from '../../product/repository/sequelize/product.repository';
import ListProductUseCase from '../../../domain/usecase/product/list/list.product.usecase';

export const productRoute = express.Router();

productRoute.post('/', async (req: Request, res: Response) => {
    const usecase = new CreateProductUseCase(new ProductRepository());
    try {
        const productDto = {
            name: req.body.name,
            price: req.body.price,
            type: req.body.type
        };

        const output = await usecase.execute(productDto);
        res.status(200).send(output);
    } catch (error) {
        res.status(500).send(error);
    }
});

productRoute.get('/', async (req: Request, res: Response) => {
    const usecase = new ListProductUseCase(new ProductRepository());
    try {
        const output = await usecase.execute({});
        res.status(200).send(output);
    } catch (error) {
        res.status(500).send(error);
    }
}); 
