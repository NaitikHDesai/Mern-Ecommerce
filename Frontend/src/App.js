import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Customer/Components/Navigation/Navigation";
import HomePage from "./Customer/Pages/HomePage/HomePage";
import Footer from "./Customer/Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";
import AdminRouters from "./Routers/AdminRouters";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminRouters />} />
      </Routes>
    </div>
  );
}

export default App;
