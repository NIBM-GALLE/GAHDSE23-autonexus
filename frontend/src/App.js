import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Customer_SignIn from "./pages/Customer_SignIn/Customer_SignIn";
import Landing_Page from "./pages/LANDING/Landing_Page/Landing_Page";
import Getstart_Page from "./pages/LANDING/Getstart_Page/Getstart_Page";
import RouteError_Page from "./pages/LANDING/RouteError_Page/RouteError_Page";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Landing_Page/>} />
        <Route path="/getstart" element={<Getstart_Page/>} />
        <Route path="/cussignin" element={<Customer_SignIn/>} />
        <Route path="/*" element={<RouteError_Page/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
