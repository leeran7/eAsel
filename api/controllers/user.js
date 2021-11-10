const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;

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
    const { name, state, city, zipcode } = req.body;
    User.create({
        name, state, city, zipcode
    })
        .then(user => {
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