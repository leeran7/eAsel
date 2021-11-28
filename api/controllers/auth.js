const express = require('express');

const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/Auth');
const { User, Cart, Social } = db;


router.post('/signup', (req,res) => { //Open signup page
  const { firstName, lastName, email, password, state, city, zipcode, facebook, linkedin, instagram, twitter} = req.body;
    User.create({
        firstName, lastName, email, state, city, zipcode, password 
    }) .then(user => {
        let completed = true;
        Cart.create({
            userId: user.id
        }).catch(err => {
            completed = false;
            res.status(400).json(err);
        })

        Social.create({
            linkedin,facebook,instagram,twitter,
            userId: user.id
        }).catch(err => {
            completed = false;
            res.status(400).json(err);
        })
        if(completed){
          req.login(user, () => {
            user.password = undefined;
            res.status(201).json(user)
          });    
        }
        
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

router.get("/login", (req,res) => {
  if(req.user){
    res.json(req.user)
  } else {
    res.status(400).json({ msg: "Not Logged In" });
  }
})
router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });

router.post('/logout', (req,res) => {
  if(req.user){
    req.logout();
    res.status(200).json({ msg: "Successfully Logged Out" });
  } else {
    res.status(400).json({ msg: "Already Logged Out" });
  }
  
})

module.exports = router;