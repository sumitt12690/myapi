'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductSchema = _mongoose2.default.Schema({
    prd_cat_id: _mongoose2.default.Schema.Types.ObjectId,
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
        Deafult: (0, _moment2.default)().format()
    },
    updated_at: {
        type: String,
        Deafult: (0, _moment2.default)().format()
    }
}, {
    timestamps: true
});

module.exports = _mongoose2.default.model('Product', ProductSchema);
//# sourceMappingURL=product.model.js.map