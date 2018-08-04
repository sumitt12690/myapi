'use strict';

var _category = require('../controllers/category.controller');

var _category2 = _interopRequireDefault(_category);

var _express = require('express');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

routes.get('/', function (req, res, next) {
    _category2.default.categoryList(function (err, result) {
        if (err) {
            return next(err);
        }
        return res.json(result);
    });
});

routes.get('/:id', function (req, res, next) {
    _category2.default.categoryDetail(req.params.id, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

routes.post('/', function (req, res, next) {
    _category2.default.addCategory(req.body, function (err, result) {
        if (err) {
            console.log(err);
            return next(err);
        }
        return res.json(result);
    });
});

routes.put('/:id', function (req, res, next) {
    var catId = req.params.id;
    _category2.default.updateCategory(req.body, catId, function (err, result) {
        if (err) {
            return next(err);
        }
        return res.json(result);
    });
});

routes.delete('/:catId', function (req, res, next) {
    var catId = req.params.catId;
    _category2.default.deleteCategory(catId, function (err, result) {
        if (err) {
            return next(err);
        }
        return res.json(result);
    });
});

module.exports = routes;
//# sourceMappingURL=category.js.map