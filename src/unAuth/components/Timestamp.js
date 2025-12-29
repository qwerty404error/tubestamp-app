import React from 'react';
import './Timestamp.css';

const Timestamp = () => {
  return (
    <div className="timestamp">
      <h2 className="timestamp-title">AI YouTube Timestamps</h2>
      <p className="timestamp-description">
        Generates timestamps for a given YouTube video using the bump-1.0 model. 
        This software was built using the AI—watch tutorials how to{' '}
        <a href="#tutorials" className="timestamp-link">here</a>.
      </p>
      <form className="timestamp-form">
        <input
          type="url"
          placeholder="Enter YouTube video URL"
          className="timestamp-input"
        />
        <button type="submit" className="timestamp-submit">
          Generate
        </button>
      </form>
    </div>
  );
};

export default Timestamp;