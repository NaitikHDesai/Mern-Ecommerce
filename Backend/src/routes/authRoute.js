const express=require("express");
const router=express.Router();
const authControl=require("../controller/authController");

router.post("/signup",authControl.register);
router.post("/signin",authControl.login);

module.exports=router;