import React, { useState } from 'react';
import './Timestamp.css';

const Timestamp = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  // YouTube URL regex
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)[a-zA-Z0-9_-]{11}(\S+)?$/;

  // Extract video ID from URL
  const getVideoId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/
    );
    return match ? match[1] : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setVideoData(null);

    if (!youtubeRegex.test(url)) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    const videoId = getVideoId(url);
    if (!videoId) {
      setError('Unable to extract video ID');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
      );

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        setError('Video not found');
        return;
      }

      const snippet = data.items[0].snippet;

      setVideoData({
        title: snippet.title,
        thumbnail:
          snippet.thumbnails.maxres?.url ||
          snippet.thumbnails.high?.url ||
          snippet.thumbnails.medium?.url,
      });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="timestamp">
      <h2 className="timestamp-title">AI YouTube Timestamps</h2>

      <p className="timestamp-description">
        Generates timestamps for a given YouTube video using the bump-1.0 model.
        This software was built using AI.
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
          {loading ? 'Loading...' : 'Generate Timestamps'}
        </button>
      </form>

      {/* Error message */}
      {error && <p className="timestamp-error">{error}</p>}

      {/* Video Preview */}
      {videoData && (
        <div className="video-preview">
          <img
            src={videoData.thumbnail}
            alt="Video Thumbnail"
            className="video-thumbnail"
          />
          <h3 className="video-title">{videoData.title}</h3>
        </div>
      )}
    </div>
  );
};

export default Timestamp;
