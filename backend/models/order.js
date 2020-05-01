var mongoose = require("mongoose");
var {ObjectId} = mongoose.Schema;

var ProductCartSchema = new mongoose.Schema({
    product:{
        type: ObjectId
        ref : "product"
    },
    name: String,
    count: Number,
    price: Number 
});

const ProductCart = mongoose.model("ProductCart", ProductcartSchema);

var OrderSchema = new mongoose.Schema({
    products: [ProductSchema],
    user: {
        type: ObjectId,
        ref: "User"
    },
    transactionId: {},
    amount: {type: Number},
    address: String,
    updated: Date
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = {ProductCart, Order};