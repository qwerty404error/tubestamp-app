import React from 'react';
import './Bumpups.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Bumpups = () => {
  return (
    <div className="bumpups">
      <h2>Do more with bumpups.com</h2>
      <p>
        Process your videos to deliver insights across all industries. Ask questions, request summaries, analyses, and more with Bump-1.0.
      </p>
      <div className="bumpups-options">
        <div className="option">
          <i className="fas fa-upload"></i>
          <h3>Local Videos</h3>
          <a href="#" className="learn-more">Learn more <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="option">
          <i className="fas fa-comments"></i>
          <h3>Video Chat</h3>
          <a href="#" className="learn-more">Learn more <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="option">
          <i className="fas fa-video"></i>
          <h3>AI YouTube</h3>
          <a href="#" className="learn-more">Learn more <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="option">
          <i className="fas fa-code"></i>
          <h3>API</h3>
          <a href="#" className="learn-more">Learn more <i className="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Bumpups;