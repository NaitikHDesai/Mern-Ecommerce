import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomerRoutes from "./Routers/CustomerRoutes";
import Admin from "./Admin/Admin";

function App() {
  const isAdmin=true;
  return (
    <div className="">
      
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<Admin />} />
        
      </Routes>
    </div>
  );
}

export default App;
