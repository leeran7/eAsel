const express = require('express');
const router = express.Router();
const db = require('../models');
const { Cart, Cartitem } = db;

//gets all items in a users cart
router.get('/:userid', (req,res) => { //get users cart information
  const { userid } = req.params;
  return Cart.findByPk(userid)
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
router.post('/:userid/:itemid/new', (req, res) => { //Update Cart (Delete item or Add Item)
  const { userid, itemid } = req.params;
  Cart.findByPk(userid)
    .then(cart => {
      if(!cart){
        return res.sendStatus(404);
      }
      Cartitem.findOne({
        where: { 
          artworkId: itemid,  
          cartId: cart.id
        }
      })
        .then(item => {
          if(item){
          }
        })
      Cartitem.create({
        artworkId: itemid,
        cartId: cart.id
      })
      Cartitem.findAll({
        where: { cartId: cart.id }
      }) 
        .then(() => {
          return res.sendStatus(200);
        })
    })
    .catch(err => {
      res.status(400).json(err);
    })
});

//deletes specific item from cart
router.delete('/:userid/:itemid', (req, res) => {
  const { userid, itemid } = req.params;
  Cartitem.findOne({
    where: { artworkId: itemid }
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