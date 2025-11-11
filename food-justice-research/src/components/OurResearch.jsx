import React from 'react';
import './OurResearch.css';
import ResponsiveImage from './ResponsiveImage';
import researchImg from '../assets/homepage/ffGXRcDfMvqRSS8GbduWhBgfzlQ.jpg?w=400;800;1200&format=webp;jpg&srcset';

const OurResearch = () => {
  return (
    <section className="our-research">
      <div className="research-content">
        <div className="research-image">
          <ResponsiveImage src={researchImg} alt="Our Research" />
        </div>
        <div className="research-text">
          <h2>Our Research</h2>
          <p>Between January 2021 and June 2023 in Thorncliffe Park and Flemingdon Park, Toronto, Canada, we conducted a community based research project documenting the experiences of food insecurity and economic insecurity, and the relationship between them, since the onset of COVID-19.</p>
          <p>We spoke with residents experiencing work insecurity and workers involved in all local food programs.</p>
          <a href="https://foodjusticeresearch.ca/research" className="learn-more-button">Learn more</a>
        </div>
      </div>
    </section>
  );
};

export default OurResearch;
