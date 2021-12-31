const express = require('express');
const passport = require('../middlewares/Auth');
const router = express.Router();
const db = require('../models');
const { Social} = db;

router.get("/", passport.isAuthenticated(), (req,res) => {
    Social.findByPk(req.user.id)
        .then(socials => {
            if(!socials){
                return res.sendStatus(404)
            }
            res.json(socials);
        })
})
module.exports = router;