const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res
    .status(200)
    .send({ message: "Welcome to Ecommerce", status: true });
});

const authRouters = require("./routes/authRoute.js");
app.use("/auth", authRouters);

const userRouters = require("./routes/userRoute.js");
app.use("/api/users", userRouters);

const productRouters = require("./routes/productRoute.js");
app.use("/api/products", productRouters);

const adminProductRouters = require("./routes/adminProductRoute.js");
app.use("/api/admin/products", adminProductRouters);

const cartRouters = require("./routes/cartRoute.js");
app.use("/api/cart", cartRouters);

const cartItemRouters = require("./routes/cartItemRoute.js");
app.use("/api/cart_items", cartItemRouters);

const orderRouters = require("./routes/orderRoute.js");
app.use("/api/orders", orderRouters);


//admin routes handler
const adminOrderRouters = require("./routes/adminOrderRoute.js");
app.use("/api/admin/orders", adminOrderRouters);

const reviewRouters = require("./routes/reviewRoute.js");
app.use("/api/reviews", reviewRouters);

const ratingRouters = require("./routes/ratingRoute.js");
app.use("/api/ratings", ratingRouters);

const paymentRouters = require("./routes/paymentRoute.js");
app.use("/api/payments", paymentRouters);

module.exports = app;
