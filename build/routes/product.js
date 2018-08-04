'use strict';

var _product = require('../controllers/product.controller');

var _product2 = _interopRequireDefault(_product);

var _express = require('express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.get('/', function (req, res, next) {
    _product2.default.productList().then(function (result) {
        return res.json(result);
    }).catch(function (err) {
        return next(err);
    });
});

routes.post('/', function (req, res, next) {
    _product2.default.addProduct(req.body).then(function (result) {
        return res.json(result);
    }).catch(function (err) {
        return next(err);
    });
});

routes.put('/:prdId', function (req, res, next) {
    var prdId = req.params.prdId;
    _product2.default.updateProduct(prdId, req.body).then(function (result) {
        return res.json(result);
    }).catch(function (err) {
        return next(err);
    });
});

routes.delete('/:prdId', function (req, res, next) {
    var prdId = req.params.prdId;
    _product2.default.deleteProduct(prdId).then(function (result) {
        return res.json(result);
    }).catch(function (err) {
        return next(err);
    });
});

module.exports = routes;
//# sourceMappingURL=product.js.map