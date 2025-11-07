import React from 'react';
import './ResearchPartners.css';

const ResearchPartners = () => {
  return (
    <section className="research-partners">
      <h2>Our Research Partners</h2>
      <div className="partners">
        <div className="partner">
          <img src="https://via.placeholder.com/150" alt="Centre for Sustainable Food Systems at UBC" />
          <p>Centre for Sustainable Food Systems at UBC</p>
        </div>
        <div className="partner">
          <img src="https://via.placeholder.com/150" alt="Canadian Centre for Policy Alternatives" />
          <p>Canadian Centre for Policy Alternatives</p>
        </div>
        <div className="partner">
          <img src="https://via.placeholder.com/150" alt="BC Poverty Reduction Coalition" />
          <p>BC Poverty Reduction Coalition</p>
        </div>
      </div>
    </section>
  );
};

export default ResearchPartners;
