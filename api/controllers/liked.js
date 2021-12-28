const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/Auth');
const { Liked } = db;

router.get("/", passport.isAuthenticated(), (req, res) => {
    // res.json({"msg": "success"})
    Liked.findAll({ where: { userId: req.user.id }})
        .then(liked => res.json(liked))
    // Liked.findAll({
    //     where: { userId: req.user.id }
    // }) .then(liked => {
    //     res.json(liked)
    // })
    // .catch(err => {
    //     res.send(400).json(err);
    // })
})

router.post('/new', passport.isAuthenticated(), (req,res) => { //Open signup page
    const { artworkid }  = req.body;
    console.log(artworkid)
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

router.delete("/:artworkid", passport.isAuthenticated(), async (req,res) => {
    const { artworkid } = req.params;
    const item = await Liked.findOne({ where: { artworkId: artworkid, userId: req.user.id } })
    item.destroy();
    res.sendStatus(200);
    // Liked.findOne({
    //     where: { artworkId: artworkid, userId: req.user.id }
    // })
    //     .then(liked => {
    //         if(liked){
    //             liked.destroy();
    //             res.sendStatus(200);
    //         }
    //         res.sendStatus(404);
    //     })
})

module.exports = router;