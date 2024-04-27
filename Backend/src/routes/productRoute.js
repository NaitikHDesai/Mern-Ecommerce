const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");
const authenticate = require("../middleware/authenticate");


router.get("/",authenticate,productController.getAllProducts);
router.get("/id/:id",authenticate,productController.findProductById);
router.get('/search', productController.searchProduct);

module.exports=router;