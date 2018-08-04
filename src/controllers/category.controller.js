import Category from '../models/category.model';
import { Types } from 'mongoose';

const objectid = Types.ObjectId;

const categoryList = function (callback) {
    Category.find({}, function (err, data) {
        if (err) {
            callback(err);
        }
        return callback(err, data);
    });
};

const categoryDetail = function (catId, callback) {
    Category.findById({ "_id": objectid(catId) }, function (err, data) {
        if (err) {
            return callback(err);
        }
        return callback(err, data);
    });
};

const addCategory = function (data, callback) {
    let category = new Category({
        "cat_name": data.name,
        "cat_slug": slugify(data.name),
    });
    category.save(err => {
        if (err) {
            return callback(err);
        }
        return callback(err, { success: true, msg: 'Category added' });
    });
}

const updateCategory = function (data, catId, callback) {
    Category.findByIdAndUpdate(
        { "_id": objectid(catId) },
        { 'cat_name': data.name },
        err => {
            console.log(err);
            return callback(err, { success: true, msg: 'Category updated' })
        });
}

const deleteCategory = function (catId, callback) {
    Category.findByIdAndRemove({ "_id": objectid(catId) }, err => {
        return callback(err, { success: true, msg: 'Category deleted' })
    });
}


function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')        // Replace spaces with -
        .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
        .replace(/\-\-+/g, '-')      // Replace multiple - with single -
        .replace(/^-+/, '')          // Trim - from start of text
        .replace(/-+$/, '');         // Trim - from end of text
}


module.exports = {
    categoryList: categoryList,
    categoryDetail: categoryDetail,
    addCategory: addCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory,
}