const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: string,
        required : [true, "Product name is required"],
    },
    price: {
        type: Number,
        required : [true, "Product price is required"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default : Data.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["Apple", "Lenovo", "Asus", "Dell", "HP"],
            message : `{value} is not supported`,
        },
    },
});

module.exports = mongoose.model("Product", productSchema);