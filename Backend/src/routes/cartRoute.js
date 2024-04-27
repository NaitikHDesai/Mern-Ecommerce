const express = require("express");
const router = express.Router();

const cartController = require("../controller/cartController");
const authenticate = require("../middleware/authenticate.js");

// get:/api/cart
router.get("/", authenticate, cartController.findUserCart);


//PUT :/api/cart/add
router.put("/add", authenticate, cartController.addItemToCart);

module.exports = router;
