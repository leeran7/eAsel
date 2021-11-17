const express = require('express');
const router = express.Router();
const db = require('../models');
const { Cart } = db;

router.get('/cart/:userid', (req,res) => { //get users cart information
  const { userid } = req.params;
  return Cart.findByPk(userid)
    .then(cart => {
      res.json(cart);
    })
    .catch(err => {
      res.status(400).json(err);
    })
});


router.put('/cart/:userid', (req, res) => { //Update Cart (Delete item or Add Item)
  const { userid } = req.params;
  Cart.findByPk(userid)
    .then(cart => {
      //update 
    })
    .catch(err => {
      res.status(400).json(err);
    })
});

module.exports = router;