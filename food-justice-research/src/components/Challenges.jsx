import React, { useState } from 'react';
import './Challenges.css';

import severityImage from '../assets/homepage/grx5WPQXF83mssd35daufnpmbA.jpg';
import unaffordabilityImage from '../assets/homepage/cV4W8BowN8UqD6sZS7XPqmCrj8.jpg';
import exclusionImage from '../assets/homepage/eR1qJVz40AaT7V3YCrMA26P0cpo.jpg';
import stigmatizationImage from '../assets/homepage/TPaxET9KbXqsDgAfGonreR2Le0.jpg';
import emergencyImage from '../assets/homepage/KYrKdcBYQH3W8uXXhi1V3WfZss.jpg';
import povertyImage from '../assets/homepage/e8J8E5eYvhfEhxMBcSZMKbynYE.jpg';
import powerImage from '../assets/homepage/77HphpE6HipyJjg1etIr16KaC0.jpg';


const challenges = [
  {
    title: 'Increasing, Deepening Food Insecurity',
    image: severityImage,
    link: 'https://foodjusticeresearch.ca/challenges-developing-severity',
  },
  {
    title: 'Unaffordability',
    image: unaffordabilityImage,
    link: 'https://foodjusticeresearch.ca/challenges-unaffordability',
  },
  {
    title: 'Labour Market Exclusion, Exploitation',
    image: exclusionImage,
    link: 'https://foodjusticeresearch.ca/challenges-labour-market-exploitation',
  },
  {
    title: 'Stigmatization, Shame and Indignity',
    image: stigmatizationImage,
    link: 'https://foodjusticeresearch.ca/challenges-stigmatization',
  },
  {
    title: 'Emergency Food Charity',
    image: emergencyImage,
    link: 'https://foodjusticeresearch.ca/challenges-emergency-food-charity',
  },
  {
    title: 'Poverty and Corporate Greed',
    image: povertyImage,
    link: 'https://foodjusticeresearch.ca/challenges-poverty-corporate-greed',
  },
  {
    title: 'Built-in Competition and Power Imbalances',
    image: powerImage,
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
