import React, { useState } from 'react';
import './Timestamp.css';

const Timestamp = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  // YouTube URL regex
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)[a-zA-Z0-9_-]{11}(\S+)?$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!youtubeRegex.test(url)) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    setError('');
    console.log('Valid YouTube URL:', url);

    // 👉 Call API / generate timestamps here
  };

  return (
    <div className="timestamp">
      <h2 className="timestamp-title">AI YouTube Timestamps</h2>

      <p className="timestamp-description">
        Generates timestamps for a given YouTube video using the bump-1.0 model.
        This software was built using the AI. Watch tutorials –{' '}
        <a href="#tutorials" className="timestamp-link">here</a>.
      </p>

      <form className="timestamp-form" onSubmit={handleSubmit}>
        <div className="timestamp-input-container">
          <span className="timestamp-input-icon">🔗</span>
          <input
            type="url"
            className="timestamp-input"
            placeholder="Enter YouTube video URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <button type="submit" className="timestamp-submit">
          Generate Timestamps
        </button>
      </form>

      {/* Error message */}
      {error && <p style={{ color: '#ff6b6b', marginTop: '12px' }}>{error}</p>}
    </div>
  );
};

export default Timestamp;
