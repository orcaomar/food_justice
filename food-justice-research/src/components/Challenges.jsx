import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Challenges.css';
import challenges from '../data/ChallengesData';
import ResponsiveImage from './ResponsiveImage';

const Challenges = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= challenges.length - slidesPerPage ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? challenges.length - slidesPerPage : prevIndex - 1));
  };

  // ⚡ Bolt: Memoize the rendered slides to prevent unnecessary re-renders of the entire
  // list and its child <ResponsiveImage> components every time `currentIndex` changes (e.g., when the user clicks 'Next' or 'Previous').
  // This reduces React reconciliation overhead and main thread work during carousel navigation.
  const renderedSlides = useMemo(() => {
    return challenges.map((challenge, index) => (
      <div className="slide" key={index} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${challenges.length}`}>
        <div className="challenge-card">
          <h3>{challenge.title}</h3>
          <ResponsiveImage src={challenge.imageUrl} alt={`Illustration for ${challenge.title}`} />
          <Link to={challenge.link} className="learn-more-button" aria-label={`Learn more about ${challenge.title}`}>
            Learn more
          </Link>
        </div>
      </div>
    ));
  }, []);

  return (
    <section className="challenges" aria-labelledby="challenges-heading">
      <h2 id="challenges-heading">Challenges</h2>
      <div className="slider-container" role="region" aria-roledescription="carousel" aria-label="Challenges Carousel">
        <div className="slider" style={{ transform: `translateX(-${(currentIndex / slidesPerPage) * 100}%)` }} aria-live="polite">
          {renderedSlides}
        </div>
        <button className="prev-button" onClick={prevSlide} aria-label="Previous challenge">&#10094;</button>
        <button className="next-button" onClick={nextSlide} aria-label="Next challenge">&#10095;</button>
      </div>
    </section>
  );
};

export default Challenges;
