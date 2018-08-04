'use strict';

var _category = require('../models/category.model');

var _category2 = _interopRequireDefault(_category);

var _mongoose = require('mongoose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var objectid = _mongoose.Types.ObjectId;

var categoryList = function categoryList(callback) {
    _category2.default.find({}, function (err, data) {
        if (err) {
            callback(err);
        }
        return callback(err, data);
    });
};

var categoryDetail = function categoryDetail(catId, callback) {
    _category2.default.findById({ "_id": objectid(catId) }, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(err, data);
    });
};

var addCategory = function addCategory(data, callback) {
    var category = new _category2.default({
        "cat_name": data.name,
        "cat_slug": slugify(data.name)
    });
    category.save(function (err) {
        if (err) {
            return callback(err);
        }
        return callback(err, { success: true, msg: 'Category added' });
    });
};

var updateCategory = function updateCategory(data, catId, callback) {
    _category2.default.findByIdAndUpdate({ "_id": objectid(catId) }, { 'cat_name': data.name }, function (err) {
        console.log(err);
        return callback(err, { success: true, msg: 'Category updated' });
    });
};

var deleteCategory = function deleteCategory(catId, callback) {
    _category2.default.findByIdAndRemove({ "_id": objectid(catId) }, function (err) {
        return callback(err, { success: true, msg: 'Category deleted' });
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
    categoryList: categoryList,
    categoryDetail: categoryDetail,
    addCategory: addCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory
};
//# sourceMappingURL=category.controller.js.map