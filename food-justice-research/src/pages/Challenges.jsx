import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import challenges from '../data/ChallengesData';
import './Challenges.css';

const Challenges = () => {
  useEffect(() => {
    document.title = 'Challenges | Flemingdon & Thorncliffe Food Justice | Toronto, Canada';
  }, []);

  return (
    <section className="challenges-page">
      <div className="masthead">
        <img
          src="https://framerusercontent.com/images/Rpn5t3gee6lAsbzLDCUvpXmQvkY.png"
          alt="Masthead"
          className="masthead-image"
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
            <img
              src={challenge.imageUrl}
              alt={challenge.title}
              className="challenge-image"
            />
            <div className="challenge-content">
              <h3>{challenge.title}</h3>
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
