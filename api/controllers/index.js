const express = require('express');
const router = express.Router();


// Load each controller
const postsController = require('./posts.js');
const appConfigController = require('./appConfig.js');
const userController = require("./user.js");
const checkoutController = require("./checkout.js");
const cartController = require("./cart.js");
const artworkController = require("./artwork.js");
const authentication = require("./authentication.js")
// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller

router.use('/users', userController);
router.use('/artworks', artworkController);
router.use('/carts', cartController);
router.use('/checkout', checkoutController);
router.use('/posts', postsController);
router.use('/application-configuration', appConfigController);


module.exports = router;