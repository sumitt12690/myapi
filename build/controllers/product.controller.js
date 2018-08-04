'use strict';

var _product = require('../models/product.model');

var _product2 = _interopRequireDefault(_product);

var _mongoose = require('mongoose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var objectid = _mongoose.Types.ObjectId;

var productList = function productList() {
    return new Promise(function (resolve, reject) {
        _product2.default.find({}, function (err, data) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

var productDetail = function productDetail(prdId) {
    return new Promise(function (resolve, reject) {
        _product2.default.findById({ "_id": objectid(prdId) }, function (err, data) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

var addProduct = function addProduct(data) {
    console.log(data);
    var product = new _product2.default({
        "prd_cat_id": '5b658f1d0ac3634aec65e891',
        "prd_name": data.name,
        "prd_slug": slugify(data.name),
        "prd_type": "DIGITAL",
        "prd_price": data.price || 1,
        "prd_link": data.link
    });
    return new Promise(function (resolve, reject) {
        product.save(function (err) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve({ success: true, msg: 'Product added' });
            }
        });
    });
};

var updateProduct = function updateProduct(prdId, data) {
    var productData = {
        "prd_cat_id": '5b51cba256d2b82cd040c8c9',
        "prd_name": data.name
    };
    return new Promise(function (resolve, reject) {
        _product2.default.findByIdAndUpdate({ "_id": objectid(prdId) }, productData, function (err) {
            if (err) reject(err);else resolve({ success: true, msg: 'Product updated' });
        });
    });
};

var deleteProduct = function deleteProduct(prdId) {
    return new Promise(function (resolve, reject) {
        _product2.default.findByIdAndRemove({ "_id": objectid(prdId) }, function (err) {
            if (err) reject(err);else resolve({ success: true, msg: 'Product deleted' });
        });
    });
};

function slugify(text) {
    return text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

module.exports = {
    productList: productList,
    productDetail: productDetail,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
};
//# sourceMappingURL=product.controller.js.map