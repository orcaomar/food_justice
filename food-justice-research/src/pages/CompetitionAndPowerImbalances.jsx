import React, { useEffect } from 'react';
import CompetitionAndPowerImbalancesData from '../data/CompetitionAndPowerImbalancesData';
import './CompetitionAndPowerImbalances.css';

const CompetitionAndPowerImbalances = () => {
  const { title, image, subTitle, sections } = CompetitionAndPowerImbalancesData;

  useEffect(() => {
    document.title = `${title} | Flemingdon & Thorncliffe Food Justice | Toronto, Canada`;
  }, [title]);

  return (
    <div className="competition-and-power-imbalances">
      <h1>{title}</h1>
      <img src={image} alt={title} className="main-image" />
      <p className="summary">{subTitle}</p>

      <div className="sections">
        {sections.map((section, index) => (
          <div key={index} className={`section ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
            <div className="image-container">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="text-container">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              <button className="hear-story-button">Hear Story</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetitionAndPowerImbalances;
