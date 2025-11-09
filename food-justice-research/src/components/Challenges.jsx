import React, { useState } from 'react';
import './Challenges.css';
import challenges from '../data/ChallengesData';

const Challenges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= challenges.length - slidesPerPage ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? challenges.length - slidesPerPage : prevIndex - 1));
  };

  return (
    <section className="challenges">
      <h2>Challenges</h2>
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${(currentIndex / slidesPerPage) * 100}%)` }}>
          {challenges.map((challenge, index) => (
            <div className="slide" key={index}>
              <div className="challenge-card">
                <h3>{challenge.title}</h3>
                <img src={challenge.imageUrl} alt={challenge.title} />
                <a href={challenge.link} className="learn-more-button">Learn more</a>
              </div>
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={prevSlide}>&#10094;</button>
        <button className="next-button" onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};

export default Challenges;
