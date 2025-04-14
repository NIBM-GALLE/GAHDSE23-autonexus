import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Landing_Page from "./pages/LANDING/Landing_Page/Landing_Page";
import Getstart_Page from "./pages/LANDING/Getstart_Page/Getstart_Page";
import RouteError_Page from "./pages/LANDING/RouteError_Page/RouteError_Page";
import Customer_SignIn from "./pages/CUSTOMER/Customer_SignIn/Customer_SignIn";
import Customers_Profile from "./pages/CUSTOMER/Customers_Profile/Customers_Profile";
import Product_Card01 from "./components/Product/Product_Card01/Product_Card01";
import Customer_Home from "./pages/CUSTOMER/Customer_Home/Customer_Home";
import Customer_Register from "./pages/CUSTOMER/Customer_Register/Customer_Register";
import Admin_Dashboard from "./pages/ADMIN/Admin_Dashboard";
import Customer_Profile_Form from "./pages/CUSTOMER/Customer_Profile_Form/Customer_Profile_Form";


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Landing_Page/>} />
        <Route path="/getstart" element={<Getstart_Page/>} />
        <Route path="/cussignup" element={<Customer_Register/>} />
        <Route path="/cussignin" element={<Customer_SignIn/>} />
        <Route path="/cusprofile" element={<Customers_Profile/>} />
        <Route path="/cushome" element={<Customer_Home/>} />
        <Route path="/cusprofileform" element={<Customer_Profile_Form/>} />
        <Route path="/*" element={<RouteError_Page/>} />
        <Route path="/pcard" element={<Product_Card01/>} />
        <Route path="/admindashboard" element={<Admin_Dashboard/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
