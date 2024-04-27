const cartService = require("../Services/cartService");

const findUserCart = async (req, res) => {
  try {
    const user = req.user;  
    const cart = await cartService.findUserCart(user.id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Failed to get user cart." });
    }
}

const addItemToCart = async (req, res) => {
  const user = req.user;
  try {
    const cartItem = await cartService.addCartItem(user._id, req.body);
    return res.status(200).send(cartItem);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { addItemToCart, findUserCart };
