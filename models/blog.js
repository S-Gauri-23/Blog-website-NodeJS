const mongoose = require('mongoose');

//Schema here is basically a constructor 
const Schema = mongoose.Schema;

// two parameters are passed to the schema constructor which are:
/*  
    1. Object which describes the schema of the document
    2. Optional object 
*/
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true});


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;