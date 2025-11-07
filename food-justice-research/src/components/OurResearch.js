import React from 'react';
import './OurResearch.css';

const OurResearch = () => {
  return (
    <section className="our-research">
      <h2>Our Research</h2>
      <p>Our research provides a critical perspective on the BC government’s provincial food security policies and programs and their framing of food (in)security as a problem of individual-level poverty and food illiteracy. Our approach is to bring a food justice and food sovereignty lens to analyze how institutional and systemic racism and colonialism produce and maintain food insecurity for Indigenous, Black and other racialized communities.</p>
      <div className="research-cards">
        <div className="card">
          <img src="https://framerusercontent.com/images/sS6rB44C0C044158E447481.jpg" alt="What is Food Justice?" />
          <h3>What is Food Justice?</h3>
          <p>Learn about the key principles of food justice and how it differs from the dominant approaches to food insecurity.</p>
        </div>
        <div className="card">
          <img src="https://framerusercontent.com/images/sS6rB44C0C044158E447481.jpg" alt="What are the challenges?" />
          <h3>What are the challenges?</h3>
          <p>Learn about the key challenges to achieving food justice in BC.</p>
        </div>
        <div className="card">
          <img src="https://framerusercontent.com/images/sS6rB44C0C044158E447481.jpg" alt="What are the community ideas?" />
          <h3>What are the community ideas?</h3>
          <p>Learn about the community-led solutions to achieving food justice in BC.</p>
        </div>
      </div>
    </section>
  );
};

export default OurResearch;
