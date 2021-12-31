const express = require('express');
const passport = require('../middlewares/Auth');
const router = express.Router();
const db = require('../models');
const { User, Cart, Social, Transaction, Artwork } = db;

router.get("/", (req,res) => {
    User.findAll({})
        .then(users => res.json(users));
})


router.get('/:userid', (req,res) => { // Get User
    const { userid } = req.params;
    User.findByPk(userid)
        .then(user => {
            if(!user){
                return res.sendStatus(404)
            }
            res.json(user);
        })
});



router.put('/', (req, res) => { // Update user
    
    User.findByPk(req.user.id)
        .then(user => {
            if(!user){
                return res.sendStatus(404);
            }
            const { firstName, lastName, bio, profilePic, pinterest, state, city, zipcode, linkedin, instagram, twitter, facebook } = req.body;
            user.firstName = firstName;
            user.lastName = lastName;
            user.bio = bio;
            user.email = req.user.email;
            user.profilePic = req.user.profilePic;
            user.state = state;
            user.city = city;
            user.zipcode = zipcode;
            Social.findByPk(req.user.id)
                .then(social => {
                    if(!social){
                        return res.sendStatus(404);
                    }
                    social.twitter = twitter;
                    social.facebook = facebook;
                    social.linkedin = linkedin;
                    social.instagram = instagram;
                    social.pinterest = pinterest;
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
                    console.log(err)
                    res.status(400).json(err);
                })
        })
    
});

router.get('/:userid/artworks', (req, res) => { // Get only users artworks
    const { userid } = req.params;
    Artwork.findAll({
        where: { userId: userid }
    }).then(artworks => {
        res.json(artworks);
    }).catch(err => {
        res.status(400).json(err);
    })
  });

router.delete('/', (req, res) => { // Delete user
    User.findByPk(req.user.id)
        .then(user => {
            if(!user){
                res.json(404);
            }
            user.destroy();
            res.sendStatus(204);
        })
});

module.exports = router;