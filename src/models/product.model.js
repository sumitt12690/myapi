const mongoose = require('mongoose');
const moment = require('moment');

const ProductSchema = mongoose.Schema({
    prd_cat_id: mongoose.Schema.Types.ObjectId,
    prd_name: {
        type: String,
        required: true
    },
    prd_slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    prd_image: {
        type: String
    },
    prd_price: {
        type: Number
    },
    prd_link: {
        type: String
    },
    prd_type: {
        type: String,
        enum: ['DIGITAL', 'PHYSICAL']
    },
    prd_is_active: {
        type: Boolean,
        Deafult: true
    },
    created_at: {
        type: String,
        Deafult: moment().format()
    },
    updated_at: {
        type: String,
        Deafult: moment().format()
    }
}, {
        timestamps: true
    });

module.exports = mongoose.model('Product', ProductSchema);