const mongoose = require('mongoose');

// purpose of this file is to describe how our quotes table (collection s hould look)

//instructions for what the quotes table should look like below
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 charasters"]
    },
   
  
},{timestamps: true});

const Author = mongoose.model("Author", AuthorSchema );

module.exports = Author;