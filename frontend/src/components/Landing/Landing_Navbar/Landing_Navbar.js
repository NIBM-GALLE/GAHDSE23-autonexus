import { useState } from "react";
import { Link } from "react-router-dom";
// import "remixicon/fonts/remixicon.css";
import "./Landing_Navbar.css"; 

const Landing_Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="landingnav">
      <div className="landingnav_header">
        <div className="landingnav_logo">
          <Link to="/" className="landingnav-logotext">AutoNexus</Link>
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
          <Link to="/getstart">
            <button className="landingnav_btn btn__secondary">Get Started</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Landing_Navbar;
