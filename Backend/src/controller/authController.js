const userService = require("../Services/userService");
const jwtProvider = require("../config/jwtProvider");
const bcrypt = require("bcrypt");
const cartService = require("../Services/cartService");

const register = async (req, res) => {
  try {
    const user = await userService.creatUser(req.body);
    const jwt = jwtProvider.generateToken(user._id);

    await cartService.createCart(user);

    return res.status(200).send({ jwt, message: "User Registered Successfully" });

  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await userService.getUserByEmail(email);

    if (!user) {
      return res.status(200).send({ error: 'User not found with Email' }); // Corrected error message
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ error: 'Invalid password' });
    }

    const jwt = jwtProvider.generateToken(user._id);

    return res.status(200).send({ jwt, message: "Login success" });

  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}



module.exports = { register, login };
