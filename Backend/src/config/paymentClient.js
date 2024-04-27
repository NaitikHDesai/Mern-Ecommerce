const Razorpay = require("razorpay");

const apiKey = "rzp_test_CKqNGeeTPUtzvT";
const apiSecret = "GyVJs8kIsm9UfB5kJpUqeqfX";

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });

module.exports = razorpay;
