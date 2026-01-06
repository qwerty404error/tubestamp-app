import React from 'react';
import './NavBar.css';
import logo from '../../assets/tubelogo.png'; // Ensure the logo path is correct

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">
          <span className="navbar-title-highlight">tube</span>stamp
        </span>
      </div>

      <div className="navbar-links">
        <button className="quote-button">
          AI Video Chatbot <span className="arrow">→</span>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;