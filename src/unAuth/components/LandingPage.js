import React from 'react';
import './LandingPage.css';
import NavBar from './NavBar';
import Timestamp from './Timestamp';
import Bumpups from './Bumpups';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <h1 className="landing-title">Hello, Landing Page!</h1>
      <p className="landing-description">Welcome to the Tubestamp App. Explore and enjoy!</p>
      <Timestamp />
      <Bumpups />
      <Footer />
    </div>
  );
};

export default LandingPage;