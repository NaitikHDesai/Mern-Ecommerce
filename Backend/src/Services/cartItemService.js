const CartItem = require("../models/cartItemModels");
const userService = require("./userService");

async function createCartItem(cartItemData) {
  const cartItem = new CartItem(cartItemData);
  cartItem.quantity = 1;
  cartItem.price = cartItem.product.price * cartItem.quantity;
  cartItem.discountedPrice =
    cartItem.product.discountedPrice * cartItem.quantity;

  const createdCartItem = await cartItem.save();
  return createdCartItem;
}

async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);

    if (!item) {
      throw new Error("cart item not found:", cartItemId);
    }

    const user = await userService.findUserById(userId);

    if (!user) {
      throw new Error("user Not Found :", userId);
    }

    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("Cant update this Cart Item");
    }
  } catch (error) {
    throw new Error("error.message");
  }
}

// remove Cart item
async function removeCartItem(userId, cartItemId) {
  const cartItem = await findCartItemById(cartItemId);
  const user = await userService.findUserById(cartItem.userId);
  const reqUser = await userService.findUserById(userId);

  if (reqUser.id === user.id) {
    return await CartItem.findByIdAndDelete(cartItemId);
  }
  throw new Error("cant remove Item");
}

async function findCartItemById(cartItemId) {
  const cartItem = await CartItem.findById(cartItemId).populate("product");
  if (cartItem) {
    return cartItem;
  } else {
    throw new Error("cartItem not found with id:", cartItemId);
  }
}

module.exports = {
  createCartItem,
  updateCartItem,
  removeCartItem,
  findCartItemById,
};
