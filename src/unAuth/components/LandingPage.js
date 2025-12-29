import React from 'react';
import './LandingPage.css';
import NavBar from './NavBar';
import Timestamp from './Timestamp';
import Bumpups from './Bumpups';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <NavBar />
        <Timestamp />
        <Bumpups />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
