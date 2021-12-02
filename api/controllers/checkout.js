const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require("../middlewares/Auth");
const artwork = require('../models/artwork');
const { Cart, Transaction, Cartitem, Artwork} = db;

router.get('/', passport.isAuthenticated() ,(req,res) => { //Open signup page
  res.send("GET Checkout");
});


router.post('/', passport.isAuthenticated() ,(req, res) => { //Post signup information
  // console.log(req.user.id);
  Cart.findOne({
    where: { userId: req.user.id }
  }) //buyer userId
    .then(cart => {
      // console.log(cart.userId);
      Cartitem.findAll({ 
        where: { cartId: cart.id }
      })
        .then(items => {
          for(let item of items){
            Artwork.findByPk(item.artworkId)
              .then(artwork => {
                Transaction.create({
                  sellerId: artwork.userId,
                  buyerId: req.user.id,
                  artworkId: artwork.id
                })
                artwork.userId = req.user.id;
                artwork.isForSale = false;
                artwork.save();
              })
          }
          for(let item of items){
            Cartitem.destroy({
              where: { cartId: item.cartId, artworkId: item.artworkId }
            })
          }
          res.json(items);
        })
    })
});

module.exports = router;