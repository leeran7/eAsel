const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/Auth');
const { Cart, Cartitem } = db;

//gets all items in a users cart
router.get('/', passport.isAuthenticated(), (req,res) => { //get users cart information
  return Cart.findByPk(req.user.id)
    .then(cart => {
      if(!cart){
        return res.sendStatus(404);
      }
      Cartitem.findAll({
        where: { cartId: cart.id }
      })
        .then(items => {
          res.json(items);
        })
    })
    .catch(err => {
      res.status(400).json(err);
    })
});

//adds a new item into a users cart
router.post('/:artworkid/new', passport.isAuthenticated(), (req, res) => { //Update Cart (Delete item or Add Item)
  const { artworkid } = req.params;
  Cart.findByPk(req.user.id)
    .then(cart => {
      if(!cart){
        return res.sendStatus(404);
      }
      Cartitem.create({
        artworkId: artworkid,
        cartId: cart.id
      })
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(400).json(err);
    })
});

//deletes specific item from cart
router.delete('/:itemid', passport.isAuthenticated() , (req, res) => {
  const { itemid } = req.params;
  Cartitem.findOne({
    where: { artworkId: itemid, userId: req.user.id }
  })
    .then(item => {
      if(!item){
        return res.sendStatus(404);
      }
      item.destroy();
      res.sendStatus(204);
    })
})

module.exports = router;