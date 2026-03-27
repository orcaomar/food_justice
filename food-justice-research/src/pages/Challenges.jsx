import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import challenges from '../data/ChallengesData';
import './Challenges.css';
import ResponsiveImage from '../components/ResponsiveImage';
// ⚡ Bolt: LCP & Bundle Size Optimization
// Using vite-imagetools to generate responsive, modern-format (WebP) variants of the static masthead.
// This replaces a large, static PNG with a responsive srcset to prevent blocking the main thread
// and consume less bandwidth, significantly improving initial load times.
import headerBackground from '../assets/challenges/Rpn5t3gee6lAsbzLDCUvpXmQvkY.png?w=400;800;1200&format=webp;png&srcset';

const Challenges = () => {
  useEffect(() => {
    document.title = 'Challenges | Flemingdon & Thorncliffe Food Justice | Toronto, Canada';
  }, []);

  return (
    <section className="challenges-page">
      <div className="masthead">
        {/* ⚡ Bolt: LCP Optimization - Load above-the-fold masthead eagerly with high priority to improve LCP */}
        <ResponsiveImage
          src={headerBackground}
          alt="Challenges masthead"
          className="masthead-image"
          loading="eager"
          fetchpriority="high"
        />
        <div className="masthead-overlay">
          <h1>Challenges</h1>
          <p>
            Residents and workers in Thorncliffe and Flemingdon identified many
            challenges underlying the problem of local food insecurity.
          </p>
        </div>
      </div>
      <div className="challenges-grid">
        {challenges.map((challenge, index) => (
          <div className="challenge-card" key={index}>
            <h3>{challenge.title}</h3>
            <ResponsiveImage
              src={challenge.imageUrl}
              alt={challenge.title}
              className="challenge-image"
            />
            <div className="challenge-content">
              <Link to={challenge.link} className="learn-more-button">
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenges;
