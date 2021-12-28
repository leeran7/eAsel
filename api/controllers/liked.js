const express = require('express');

const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/Auth');
const liked = require('../models/liked');
const { Liked } = db;


router.post('/new', passport.isAuthenticated(), (req,res) => { //Open signup page
    const { artworkid } = req.body;
    Liked.create({ 
        artworkId: artworkid, userId: req.user.id
    })
        .then(liked => {
            if(liked){
                res.sendStatus(200);
            }
        })
        .catch(err => {
            res.send(400).json(err);
        })
});

router.delete("/", passport.isAuthenticated(), (req,res) => {
    const { artworkid } = req.body;
    Liked.findOne({
        where: { artworkId: artworkid, userId: req.user.id }
    })
        .then(liked => {
            if(liked){
                liked.destroy();
                res.sendStatus(400);
            }
            res.sendStatus(404);
        })
})

module.exports = router;