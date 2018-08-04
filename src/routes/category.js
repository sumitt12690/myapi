import category from '../controllers/category.controller';
import { Router } from 'express';
const routes = Router();

routes.get('/', function (req, res, next) {
    category.categoryList((err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    })
});

routes.get('/:id', function (req, res, next) {
    category.categoryDetail(req.params.id, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

routes.post('/', function (req, res, next) {
    category.addCategory(req.body, (err, result) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        return res.json(result);
    })
});

routes.put('/:id', (req, res, next) => {
    const catId = req.params.id;
    category.updateCategory(req.body, catId, (err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    });
});

routes.delete('/:catId', (req, res, next) => {
    const catId = req.params.catId;
    category.deleteCategory(catId, (err, result) => {
        if (err) {
            return next(err);
        }
        return res.json(result);
    });
});

module.exports = routes;

