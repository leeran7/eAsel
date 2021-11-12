const express = require('express');
const router = express.Router();
const db = require('../models');
const { User, Cart, Social, Transaction } = db;

router.get("/", (req,res) => {
    User.findAll({})
        .then(users => res.json(users));
})


router.get('/user/:userid', (req,res) => { // Get User
    const { userid } = req.params;
    User.findOne(userid)
        .then(user => {
            if(!user){
                return res.sendStatus(404)
            }
            res.json(user);
        })
});

router.post('/user/new', (req,res) => {
    const { name, state, city, zipcode, linkedin, instagram, twitter, facebook } = req.body;
    // let id;
    User.create({
        name, state, city, zipcode
    })
        .then(user => {
            Cart.create({
                userId: user.id
            })
                .catch(err => {
                    res.status(400).json(err);
                })
            Transaction.create({
                userId: user.id
            })
                .catch(err => {
                    res.status(400).json(err);
                })
            Social.create({
                linkedin_link: linkedin,
                facebook_link: facebook,
                instagram_link: instagram,
                twitter_link: twitter,
                userId: user.id
            })
                .catch(err => {
                    res.status(400).json(err);
                })
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    
    

    
})

router.put('/user/:userid', (req, res) => { // Update user
    const { userid } = req.params;
    User.findByPk(userid)
        .then(user => {
            if(!user){
                return res.sendStatus(404);
            }

        })
    
});

router.put('/user/:userid/artworks', (req, res) => { // Get only users artworks
    res.send("Get user artworks");
  });

router.delete('/user/:userid', (req, res) => { // Delete user
    res.send("Delete user");
});

module.exports = router;