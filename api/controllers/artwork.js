const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require("../middlewares/Auth");
const artwork = require('../models/artwork');
const { Artwork, Transaction } = db;

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


router.post('/new', passport.isAuthenticated(), (req, res) => { //add new artwork 
    let { title, dimensionX, dimensionY, dimensionZ, genre, description, price, uri} = req.body;
     Artwork.create(
         { title, dimensionX, dimensionY, dimensionZ, 
           genre, description, price, uri, userId : req.user.id })

        .then(artwork => {
            res.status(201).json(artwork)
        })
        .catch(err => {
            res.status(400).json(err);
        })
});


router.put('/:artworkid', passport.isAuthenticated(),(req, res) => { //update artwork
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

router.delete('/:artworkid', passport.isAuthenticated(), (req, res) => {
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

router.get("/history/:artworkid", (req,res) => {
    const { artworkid } = req.params;
    Transaction.findAll({
        where: { artworkId: artworkid }
    }) .then(transactions => {
        res.json(transactions);
    }) .catch(err => {
        res.status(400).json(err);
    })
})

module.exports = router;
