const express = require('express');
const router = express.Router();
const db = require('../models');
const { Cart } = db;

router.get('/cart/:userid', (req,res) => { //Open signup page
  res.send("GET Cart");
});


router.put('/cart/:userid', (req, res) => { //Update Cart (Delete item or Add Item)
  res.send("POST Cart");
});

module.exports = router;