import React from 'react';
import './NavBar.css';
import logo from '../../assets/tubev1.png'; // Correct path to the image

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" 
        className="navbar-logo" />
      </div>

      <div className="navbar-links">
        <button className="quote-button">AI video chatbot</button>
      </div>
    </nav>
  );
};

export default NavBar;