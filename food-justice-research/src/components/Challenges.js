import React, { useState } from 'react';
import './Challenges.css';

const challenges = [
  {
    title: 'Increasing, Deepening Food Insecurity',
    image: 'https://framerusercontent.com/images/grx5WPQXF83mssd35daufnpmbA.jpg',
    link: 'https://foodjusticeresearch.ca/challenges-developing-severity',
  },
  {
    title: 'Unaffordability',
    image: 'https://framerusercontent.com/images/cV4W8BowN8UqD6sZS7XPqmCrj8.jpg',
    link: 'https://foodjusticeresearch.ca/challenges-unaffordability',
  },
  {
    title: 'Labour Market Exclusion, Exploitation',
    image: 'https://framerusercontent.com/images/eR1qJVz40AaT7V3YCrMA26P0cpo.jpg',
    link: 'https://foodjusticeresearch.ca/challenges-labour-market-exploitation',
  },
  {
    title: 'Stigmatization, Shame and Indignity',
    image: 'https://framerusercontent.com/images/TPaxET9KbXqsDgAfGonreR2Le0.jpg',
    link: 'https://foodjusticeresearch.ca/challenges-stigmatization',
  },
  {
    title: 'Emergency Food Charity',
    image: 'https://framerusercontent.com/images/KYrKdcBYQH3W8uXXhi1V3WfZss.jpg',
    link: 'https://foodjusticeresearch.ca/challenges-emergency-food-charity',
  },
  {
    title: 'Poverty and Corporate Greed',
    image: 'https://framerusercontent.com/images/e8J8E5eYvhfEhxMBcSZMKbynYE.jpg',
    link: 'https://foodjusticeresearch.ca/challenges-poverty-corporate-greed',
  },
  {
    title: 'Built-in Competition and Power Imbalances',
    image: 'https://framerusercontent.com/images/77HphpE6HipyJjg1etIr16KaC0.jpg',
    link: 'https://foodjusticeresearch.ca/challenges-competition-power-imbalance',
  },
];

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
                <img src={challenge.image} alt={challenge.title} />
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
