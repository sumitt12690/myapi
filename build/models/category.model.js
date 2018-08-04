'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategorySchema = _mongoose2.default.Schema({
    cat_name: {
        type: String,
        required: true
    },
    cat_slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    created_at: {
        type: String,
        Deafult: (0, _moment2.default)().format()
    },
    updated_at: {
        type: String,
        Deafult: (0, _moment2.default)().format()
    }
});
module.exports = _mongoose2.default.model('Category', CategorySchema);
//# sourceMappingURL=category.model.js.map