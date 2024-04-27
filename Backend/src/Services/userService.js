const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const jwtProvider = require("../config/jwtProvider");

const creatUser = async (userData) => {
  try {
    let {firstName,lastName,email,password,role}=userData;
    const isUserExist=await User.findOne({email});

    if (isUserExist) {
      throw new Error("user Already exist :", email);
    }

    password=await bcrypt.hash(password,8);

    const newUser = await User.create({firstName,lastName,email,password,role})
    console.log("user Created", newUser);
    return newUser;

  } catch (error) {
    throw new Error(error.message);
  }
};

const findUserById=async(userId)=>{
  try {
    const user = await User.findById(userId);
    // .populate("address");
    if (!user) {
      throw new Error("User not found with Id: " ,userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found with email :", email);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getUserProfileByToken = async (token) => {
  try {
    const userId=jwtProvider.getUserIdFromToken(token)
    
    const user= (await findUserById(userId)).populate("addresses");

    if (!user) {
      throw new Error("user Not Found with Id : ", userId);
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};


module.exports={
  creatUser,
  findUserById,
  getUserByEmail,
  getUserProfileByToken,
  getAllUsers
}