const express = require('express');
const router = express.Router();
const db = require('../models');
const { Cart, Transaction } = db;

router.get('/checkout', (req,res) => { //Open signup page
  res.send("GET Checkout");
});


router.post('/checkout', (req, res) => { //Post signup information
  res.send("POST Checkout");
});

module.exports = router;