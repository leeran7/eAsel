const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/signup', (req,res) => { //Open signup page
  res.send("GET Signup")
});


router.post('/signup', (req, res) => { //Post signup information
  res.send("POST Signup")
});

router.get('/signin', (req,res) => { //signin page
  res.send("GET Signin")
});


router.post('/signin', (req, res) => { //process signin
  res.send("POST Signin")
});

router.get("/logout", (req,res) => { //process logout
  res.send("Logout");
})

module.exports = router;