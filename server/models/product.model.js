const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: [true, "Gender is required"]
        },
    title: {
        type: String,
        required: [true, "Title is required"]
        },
    category: {
        type: String,
        required: [true, "Category is required"]
        },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    inventory: {
        type: Number,
        required: [true, "Quantity is required"]
    },
    primaryimage: {
        type: String,
        required: [true, "Primary image is required"]
    },
    secondimage: {
        type: String
    },
    thirdimage: {
        type: String
    }

}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);