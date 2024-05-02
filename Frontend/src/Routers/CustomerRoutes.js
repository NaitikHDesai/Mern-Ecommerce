import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../Customer/Pages/HomePage/HomePage";
import Navigation from "../Customer/Components/Navigation/Navigation";
import Footer from "../Customer/Components/Footer/Footer";
import Cart from "../Customer/Components/Cart/Cart";
import Product from "../Customer/Components/Product/Product";
import ProductDetails from "../Customer/Components/ProductDetails/ProductDetails";
import CheckOut from "../Customer/Components/Checkout/Checkout";
import Order from "../Customer/Components/Order/Order";
import OrderDetails from "../Customer/Components/Order/OrderDetails";
import SuccessPayment from "../Customer/Components/PaymentSuccess/SuccessPayment";
import About from "../Customer/Pages/About";
import PrivacyPolicy from "../Customer/Pages/PrivacyPolicy";
import TermsConditions from "../Customer/Pages/TermsConditions";
import Contact from "../Customer/Pages/Contact";
import RateProduct from "../Customer/Components/ReviewProduct/RateProduct";
function CustomerRoutes() {
  const location=useLocation();

  
  const showNavigation=location.pathname !=="*";
  return (
    <div>
      <div>
     {showNavigation &&   <Navigation />}
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />

        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/privaciy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-condition" element={<TermsConditions/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/account/rate/:productId" element={<RateProduct/>}/>
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/payment/:orderId" element={<SuccessPayment />}/>
       </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default CustomerRoutes;
