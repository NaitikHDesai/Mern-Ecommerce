const Cart = require("../models/cartModels");
const CartItem = require("../models/cartItemModels");
const Product = require("../models/productModels");
const user = require("../models/userModels");

async function createCart(user) {
  const cart = new Cart({ user });
  const createdCart = await cart.save();
  return createdCart;
}

async function findUserCart(userId) {
  let cart = await Cart.findOne({ user: userId });
  let cartItems = await CartItem.find({ cart: cart._id }).populate("product");

  cart.cartItems = cartItems;

  let totalPrice = 0;
  let totalDiscountedPrice = 0;
  let totalItem = 0;

  for (let Item of cart.cartItems) {
    totalPrice += Item.price;
    totalDiscountedPrice += Item.discountedPrice;
    totalItem += Item.quantity;
  }

  cart.totalPrice = totalPrice;
  cart.totalItem = totalItem;
  cart.totalDiscountedPrice = totalDiscountedPrice;
  cart.discounte = totalPrice - totalDiscountedPrice;
  return cart;
}

async function addCartItem(userId, req) {
  const cart = await Cart.findOne({ user: userId });
  const product = await Product.findById(req.productId);
  const isPresent = await CartItem.findOne({
    cart: cart._id,
    product: product._id,
    userId,
  });

  if (!isPresent) {
    const cartItem = new CartItem({
      product: product._id,
      cart: cart._id,
      quantity: 1,
      userId,
      price: product.price,
      size: req.size,
      discountedPrice: product.discountedPrice,
    });

    const createdCartItem = await cartItem.save();
    cart.cartItems.push(createdCartItem);
    await cart.save();
  }
  return "Item Add to Cart";
}
module.exports = { createCart, findUserCart, addCartItem };
