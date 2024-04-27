const orderService = require("../Services/orderService");

const createOrder = async (req, res) => {
  const user = await req.user;
  try {
    let createdOrder = await orderService.createOrder(user, req.body);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findOrderById = async (req, res) => {
  const user = req.user;
  // console.log("userr ",user,req.body)
  try {
    let order = await orderService.findOrderById(req.params.id);
    return res.status(201).send(order);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const orderHistory = async (req, res) => {
  const user = await req.user;
  try {
    let orders = await orderService.userOrderHistory(user._id);
    res.status(201).send(orders);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = {
  createOrder,
  findOrderById,
  orderHistory,
};
