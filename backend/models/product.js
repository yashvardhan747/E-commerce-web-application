var mongoose = require("mongoose");
var {ObjectId} = mongoose.Schema;

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },

    description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    }

    price: {
        type: Number,
        required: true,
        maxlength: 32
    }

    category: {
        type: ObjectId,
        ref: Category
    }
}, {timestamps: true});

module.exports = mongoose.model("product", productSchema);