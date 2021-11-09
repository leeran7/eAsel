const express = require('express');
const router = express.Router();
const db = require('../models');
const { Artwork } = db;

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