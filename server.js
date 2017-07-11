const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {PORT, DATABASE_URL} = require('./config');
const {Blog} = require('./models');

const app = express();
app.use(bodyParser.json());

// GET requests to /blogposts => return 10 blogposts
app.get('/blogposts', (req, res) => {
  Blog
    .find()
    // we're limiting because restaurants db has > 25,000
    // documents, and that's too much to process/return
    .limit(10)
    // `exec` returns a promise
    .exec()
    // success callback: for each restaurant we got back, we'll
    // call the `.apiRepr` instance method we've created in
    // models.js in order to only expose the data we want the API return.
    .then(blogPosts => {
      res.json({
        blogPosts: blogPosts.map(
          (blog) => blog.apiRepr())
      });
    })
    .catch(
      err => {
        console.error(err);
        res.status(500).json({message: 'Internal server error'});
    });
});


// can also request by ID
app.get('/blogposts/:id', (req, res) => {
  Blog
    // this is a convenience method Mongoose provides for searching
    // by the object _id property
    .findById(req.params.id)
    .exec()
    .then(blog =>res.json(blog.apiRepr()))
    .catch(err => {
      console.error(err);
        res.status(500).json({message: 'Internal server error'})
    });
});
