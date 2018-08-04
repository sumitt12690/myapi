import Product from '../models/product.model';
import { Types } from 'mongoose';
const objectid = Types.ObjectId;

const productList = () => {
    return new Promise((resolve, reject) => {
        Product.find({}, function (err, data) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const productDetail = prdId => {
    return new Promise((resolve, reject) => {
        Product.findById({ "_id": objectid(prdId) }, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const addProduct = data => {
    console.log(data);
    let product = new Product({
        "prd_cat_id": '5b658f1d0ac3634aec65e891',
        "prd_name": data.name,
        "prd_slug": slugify(data.name),
        "prd_type": "DIGITAL",
        "prd_price" : data.price || 1,
        "prd_link" : data.link
    });
    return new Promise((resolve, reject) => {
        product.save(err => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve({ success: true, msg: 'Product added' });
            }
        });
    });
};

const updateProduct = (prdId, data) => {
    let productData = {
        "prd_cat_id": '5b51cba256d2b82cd040c8c9',
        "prd_name": data.name,
    };
    return new Promise((resolve, reject) => {
        Product.findByIdAndUpdate({ "_id": objectid(prdId) }, productData, err => {
            if (err)
                reject(err);
            else
                resolve({ success: true, msg: 'Product updated' });
        });
    });
}


const deleteProduct = prdId => {
    return new Promise((resolve, reject) => {
        Product.findByIdAndRemove({ "_id": objectid(prdId) }, err => {
            if (err)
                reject(err)
            else
                resolve({ success: true, msg: 'Product deleted' })
        });
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
    productList: productList,
    productDetail: productDetail,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
}