const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;


router.get('/user/:userid', (req,res) => { // Get User
    res.send("GET User");
});


router.put('/user/:userid', (req, res) => { // Update user
    res.send("Update User");
});

router.put('/user/:userid/artworks', (req, res) => { // Get only users artworks
    res.send("Get user artworks");
  });

router.delete('/user/:userid', (req, res) => { // Delete user
    res.send("Delete user");
});

module.exports = router;