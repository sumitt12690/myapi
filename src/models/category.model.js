import mongoose from 'mongoose';
import moment from 'moment';
const CategorySchema = mongoose.Schema({
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
        Deafult: moment().format()
    },
    updated_at: {
        type: String,
        Deafult: moment().format()
    }
});
module.exports = mongoose.model('Category', CategorySchema);
