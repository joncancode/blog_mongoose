const mongoose = require('mongoose');

// this is our schema to represent a blog story
const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: {type: Object, required: true},
  created: {type: Date, required: true},
  content: {type: String, required: true}
});



//virtual stuff


blogSchema.methods.apiRepr = function() {


  return {
    id: this._id,
    title: this.title,
    author: this.author,
    created: this.created,
    content: this.content,
  };
}


const Blog = mongoose.model('Blog', blogSchema);

module.exports = {Blog};