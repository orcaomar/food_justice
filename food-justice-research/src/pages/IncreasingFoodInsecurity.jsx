import React, { useEffect } from 'react';
import { increasingFoodInsecurityData } from '../data/IncreasingFoodInsecurityData';
import LazyLoadImage from '../components/LazyLoadImage';
import './IncreasingFoodInsecurity.css';

const IncreasingFoodInsecurity = () => {
  const { title, image, summary, sections } = increasingFoodInsecurityData;

  useEffect(() => {
    document.title = `${title} | Flemingdon & Thorncliffe Food Justice | Toronto, Canada`;
  }, [title]);

  return (
    <div className="increasing-food-insecurity">
      <h1>{title}</h1>
      <LazyLoadImage
        src={image}
        alt={title}
        className="main-image"
      />
      <p className="summary">{summary}</p>

      <div className="sections">
        {sections.map((section, index) => (
          <div key={index} className={`section ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
            <div className="image-container">
              <LazyLoadImage
                src={section.image}
                alt={section.title}
              />
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

export default IncreasingFoodInsecurity;
