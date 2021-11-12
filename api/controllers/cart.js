const express = require('express');
const router = express.Router();
const db = require('../models');
const { Cart } = db;

router.get('/cart/:userid', (req,res) => { //Open signup page
  return Cart.findOne({
    where: { user_id: userid }
  }).then(cart => {
    return cart;
  })
});


router.put('/cart/:userid', (req, res) => { //Update Cart (Delete item or Add Item)
  Cart.update({
    where: { user_id: userid }
  }).then(cart => {
    
  })
});

module.exports = router;