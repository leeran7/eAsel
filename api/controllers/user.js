const express = require('express');
const router = express.Router();
const db = require('../models');
const { User, Cart, Social, Transaction, Artwork } = db;

router.get("/", (req,res) => {
    User.findAll({})
        .then(users => res.json(users));
})


router.get('/:userid', (req,res) => { // Get User
    const { userid } = req.params;
    User.findOne(userid)
        .then(user => {
            if(!user){
                return res.sendStatus(404)
            }
            res.json(user);
        })
});

router.post('/new', (req,res) => {
    const { name, state, city, zipcode, linkedin, instagram, twitter, facebook } = req.body;
    // let id;
    User.create({
        name, state, city, zipcode
    }).then(user => {
        let completed = true;
        Cart.create({
            userId: user.id
        }).catch(err => {
            completed = false;
            res.status(400).json(err);
        })

        Social.create({
            linkedin,facebook,instagram,twitter,
            userId: user.id
        }).catch(err => {
            completed = false;
            res.status(400).json(err);
        })
        if(completed){
            res.status(201).json(user);
        }
        
    }).catch(err => {
        res.status(400).json(err);
    })
})

router.put('/:userid', (req, res) => { // Update user
    const { userid } = req.params;
    
    User.findByPk(userid)
        .then(user => {
            if(!user){
                return res.sendStatus(404);
            }
            const { name, state, city, zipcode, linkedin, instagram, twitter, facebook } = req.body;
            user.name = name;
            user.state = state;
            user.city = city;
            user.zipcode = zipcode;
            Social.findByPk(userid)
                .then(social => {
                    if(!social){
                        return res.sendStatus(404);
                    }
                    social.twitter = twitter;
                    social.facebook = facebook;
                    social.linkedin = linkedin;
                    social.instagram = instagram;
                    social.save()
                        .catch(err => {
                            res.sendStatus(400);
                        })
                })
            user.save()
                .then(user => {
                    res.json(user);
                })
                .catch(err => {
                    res.status(400).json(err);
                })
        })
    
});

router.put('/:userid/artworks', (req, res) => { // Get only users artworks
    const { userid } = req.params;
    Artwork.findAll({
        where: { userId: userid }
    }).then(artworks => {
        res.json(artworks);
    }).catch(err => {
        res.status(400).json(err);
    })
  });

router.delete('/:userid', (req, res) => { // Delete user
    const { userid } = req.params;
    User.findByPk(userid)
        .then(user => {
            if(!user){
                res.json(404);
            }
            user.destroy();
            res.sendStatus(204);
        })
});

module.exports = router;