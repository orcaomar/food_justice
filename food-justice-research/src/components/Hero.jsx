import React from 'react';
import './Hero.css';
import backgroundVideo from '../assets/homepage/background_video.mp4';

const Hero = () => {
  return (
    <div className="hero">
      <video src={backgroundVideo} loop muted playsInline autoPlay />
      <div className="hero-text">
        <h1>Flemingdon & Thorncliffe Food Justice</h1>
        <a href="https://youtu.be/h1124yB9sc0?si=Zu4JN6y5PCmsJX5g" className="video-button">See Video</a>
      </div>
    </div>
  );
};

export default Hero;
