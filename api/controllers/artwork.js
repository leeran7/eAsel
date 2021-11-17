const express = require('express');
const router = express.Router();
const db = require('../models');
const { Artwork } = db;

router.get('/', (req, res) => {
    Artwork.findAll()
        .then(artworks => {
            res.json(artworks);
        })
        .catch(err => {
            res.status(400).json(err);
        })
})

router.get('/:artworkid', (req,res) => { //get specific artwork details
     const { artworkid } = req.params;
    Artwork.findByPk(artworkid)
    .then(artwork => {
        if(!artwork){
            return res.sendStatus(404);
        }
        res.json(artwork);
    })
});


router.post('/new',  (req, res) => { //add new artwork 
    let { name, dimensionX, dimensionY, dimensionZ, genre, description, price, uri, id} = req.body;
     Artwork.create(
         { name, dimensionX, dimensionY, dimensionZ, 
           genre, description, price, uri, userId: id })

        .then(artwork => {
            res.status(201).json(artwork)
        })
        .catch(err => {
            res.status(400).json(err);
        })
});


router.put('/:artworkid', (req, res) => { //update artwork
    let { artworkid } = req.params;
    Artwork.findByPk(artworkid)
        .then(artwork => {
            if(!artwork){
                res.sendStatus(404);
            }
            const { name, dimensionX, dimensionY, 
                dimensionZ, genre, description, price, uri} = req.body;
            artwork.uri = uri;
            artwork.description = description;
            artwork.price = price;
            artwork.name = name;
            artwork.dimensionX = dimensionX;
            artwork.dimensionY = dimensionY;
            artwork.dimensionZ = dimensionZ;
            artwork.genre = genre;
            
            artwork.save()
                .then(artwork => {
                    res.json(artwork);
                })
                .catch(error => {
                    res.status(400).json(error);
                })
        })
});

router.delete('/:artworkid',  (req, res) => {
    const { artworkid } = req.params;
    Artwork.findByPk(artworkid)
        .then(artwork => {
            if(!artwork){
                res.sendStatus(404);
            }
            artwork.destroy();
            res.sendStatus(204);
        })
});



module.exports = router;