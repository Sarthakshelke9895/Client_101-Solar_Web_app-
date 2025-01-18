import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css' //Import Link for navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left section: User Login */}
      <div className="navbar__login">
        <span className="navbar__user-name">Hello, John</span>
      </div>

      {/* Right section: Navigation Links */}
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link">About</Link>
        </li>
        <li className="navbar__item">
          <Link to="/services" className="navbar__link">Services</Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
