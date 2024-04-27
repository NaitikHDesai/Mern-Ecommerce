const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");


router.post("/", productController.createProduct);
router.post("/creates",  productController.multipleProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;
