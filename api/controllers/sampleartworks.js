const express = require('express');
const router = express.Router();
const db = require('../models');
const { SampleArtworks } = db;

router.get('/', (req, res) => {
    SampleArtworks.findAll()
        .then(artworks => {
            res.json(artworks);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

router.post('/', (req, res) => {
    const { image, thumbnail } = req.body;
    SampleArtworks.create({image, thumbnail})
        .then(artwork => {
            res.status(201).json(artwork)
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

module.exports = router;