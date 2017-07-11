const mongoose = require('mongoose');

// this is our schema to represent a blog story
const blogSchema = mongoose.Schema({
  title: {type: String, required: true},
  author: {type: Object, required: true},
  created: {type : Date, default: Date.now},
  content: {type: String, required: true}
});



//virtual stuff


blogSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`; 
});


blogSchema.methods.apiRepr = function() {


  return {
    id: this._id,
    title: this.title,
    author: this.authorName,
    created: this.created,
    content: this.content,
  };
};

const Blog = mongoose.model('Blog', blogSchema);

module.exports = {Blog};