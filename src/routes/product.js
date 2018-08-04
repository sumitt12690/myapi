import product from '../controllers/product.controller';
import { Router } from 'express';
const routes = Router();

routes.get('/', (req, res, next) => {
    product.productList().then(result => {
        return res.json(result);
    }).catch((err) => {
        return next(err);
    });
});

routes.post('/', (req, res, next) => {
    product.addProduct(req.body).then(result => {
        return res.json(result);
    }).catch(err => {
        return next(err);
    });
});

routes.put('/:prdId', (req, res, next) => {
    const prdId = req.params.prdId;
    product.updateProduct(prdId, req.body).then(result => {
        return res.json(result);
    }).catch(err => {
        return next(err);
    });
});

routes.delete('/:prdId', (req, res, next) => {
    const prdId = req.params.prdId;
    product.deleteProduct(prdId).then(result => {
        return res.json(result);
    }).catch(err => {
        return next(err);
    });
});

module.exports = routes;