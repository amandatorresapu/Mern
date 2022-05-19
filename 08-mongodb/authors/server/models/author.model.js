const mongoose = require('mongoose');

// purpose of this file is to describe how our quotes table (collection s hould look)

//instructions for what the quotes table should look like below
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name must be at least 3 charasters"]
    },
//this is option becuase there is no required
    isPublish: {
        type: Boolean
    },

    books: {
        type: Number,
        required: [true, "Must have a min number"],
        min: [1, "Books must have at least 1 number"]
    }
   
  
},{timestamps: true});

const Author = mongoose.model("Author", AuthorSchema );

module.exports = Author;