const express = require('express');
const router = express.Router();
const db = require('../models');
const { Artwork } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/artwork/:artworkid', (req,res) => { //get specific artwork details

});


router.post('/artwork/new', (req, res) => { //add new artwork 

});


router.put('/artwork/:artworkid', (req, res) => { //update artwork

});

router.delete('/artwork/:artworkid', (req, res) => {

});


router.delete('/:id', (req, res) => {

});


module.exports = router;