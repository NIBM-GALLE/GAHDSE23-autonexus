import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Landing_Page from "./pages/Landing_Page/Landing_Page";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Landing_Page/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
