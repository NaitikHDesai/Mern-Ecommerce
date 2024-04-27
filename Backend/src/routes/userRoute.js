const express=require("express");
const router=express.Router();
const userControl=require("../controller/userController");

router.get("/profile",userControl.getUserProfile);
router.get("/",userControl.getAllUsers);

module.exports=router;
