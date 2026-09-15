import React from 'react';
import './Hero.css';
import backgroundVideo from '../assets/homepage/background_video.mp4';
import heroPoster from '../assets/homepage/ffGXRcDfMvqRSS8GbduWhBgfzlQ.jpg?w=800;1200&format=webp;jpg&srcset';

const Hero = () => {
  const posterUrl = Array.isArray(heroPoster) ? heroPoster[0] : heroPoster;

  return (
    <div className="hero">
      <video
        src={backgroundVideo}
        poster={posterUrl}
        loop
        muted
        playsInline
        autoPlay
        preload="metadata"
        aria-hidden="true"
        tabIndex="-1"
      />
      <div className="hero-text">
        <h1>Flemingdon & Thorncliffe Food Justice</h1>
        <a
          href="https://youtu.be/h1124yB9sc0?si=Zu4JN6y5PCmsJX5g"
          target="_blank"
          rel="noopener noreferrer"
          className="video-button"
          aria-label="See Video (opens in a new tab)"
        >
          See Video
        </a>
      </div>
    </div>
  );
};

export default Hero;
