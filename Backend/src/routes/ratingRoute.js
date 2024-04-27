const express = require("express");
const router = express.Router();

const ratingController = require("../controller/ratingController");
const authenticate = require("../middleware/authenticate");

router.get("/create", authenticate, ratingController.createRating);
router.put("/product/:productId", authenticate, ratingController.getProductsRating);

module.exports = router;
