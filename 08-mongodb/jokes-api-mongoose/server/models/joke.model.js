const mongoose = require('mongoose');

// purpose of this file is to describe how our quotes table (collection s hould look)

//instructions for what the quotes table should look like below
const JokeSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "content is required!"],
        minlength: [5, "content must be at least 5 charasters"]
    },
    author: {
        type: String,
        required: [true, "content is required"],
        minlength: [2, "author name must be at 2 characters"]
    },
    rating: {
        type: Number,
        min: [1, "Rating cant be less than 1"],
        max: [10, "rating cant be more than 10"]
    },
    
  
},{timestamps: true});

const Joke = mongoose.model("Joke", JokeSchema );

module.exports = Joke;