import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../../assets/alogo.png";
import "./Customer_Navbar.css"; 

const Customer_Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = async () => {
    const confirmation = window.confirm("Are you sure you want to logout?");
    if (!confirmation) {
      return; // Do nothing if the user cancels the logout
    }
  
    const token = localStorage.getItem('token');
    
    try {
      const response = await fetch('http://localhost:5000/api/cuslogout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
  
      const data = await response.json();
      if (response.ok) {
        alert(data.message); 
      } else {
        alert('Logout failed: ' + data.message);
      }
    } catch (error) {
      alert('Logout failed: Server error');
      console.error('Error logging out:', error);
    }
  
    localStorage.removeItem('token');
    navigate('/cussignin');
  };
  
  

  return (
    <nav className="landingnav">
      <div className="landingnav_header">
        <img src={img1} alt="Fashion Banner" className="customer_navbar-image" />
        <div className="landingnav_logo">
          <Link to="/" className="landingnav-logotext"></Link>
        </div>
        <div className="landingnav_menu_btn" onClick={toggleMenu} aria-label="Menu">
          <i className="ri-menu-line" aria-hidden="true"></i>
        </div>

        <ul className={`landingnav_links ${menuOpen ? "open" : ""}`} onClick={closeMenu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#ride">Ride</a></li>
          <li><a href="#contactus">Contact</a></li>
        </ul>
        <div className="landingnav_btns">
          <button className="landingnav_btn btn__secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Customer_Navbar;
