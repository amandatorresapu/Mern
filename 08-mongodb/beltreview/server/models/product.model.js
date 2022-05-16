const mongoose = require('mongoose');

// purpose of this file is to describe how our quotes table (collection s hould look)

//instructions for what the quotes table should look like below
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [2, "Title must be at least 2 charasters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minlength: [1, "price name must be at 1 Number"]
    },
    description: {
        type: String,
        min: [1, "Des cant be less than 1"],
        max: [255, "Des cant be more than 255"]
    },
    
  
},{timestamps: true});

const Product = mongoose.model("Product", ProductSchema );

module.exports = Product;