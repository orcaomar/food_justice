import React, { useEffect } from 'react';
import PovertyAndCorporateGreedData from '../data/PovertyAndCorporateGreedData';
import LazyLoadImage from '../components/LazyLoadImage';
import './PovertyAndCorporateGreed.css';

const PovertyAndCorporateGreed = () => {
  const { title, image, subTitle, sections, carousel } = PovertyAndCorporateGreedData;

  useEffect(() => {
    document.title = `${title} | Flemingdon & Thorncliffe Food Justice | Toronto, Canada`;
  }, [title]);

  const renderSectionContent = (section) => {
    if (section.map) {
      return <div dangerouslySetInnerHTML={{ __html: section.map }} />;
    }
    return <p>{section.text}</p>;
  };

  return (
    <div className="poverty-and-corporate-greed">
      <h1>{title}</h1>
      <LazyLoadImage
        src={image}
        alt={title}
        className="main-image"
      />
      <p className="summary">{subTitle}</p>

      <div className="sections">
        {sections.map((section, index) => (
          <div key={index} className={`section ${section.image ? (index % 2 === 0 ? 'image-left' : 'image-right') : 'text-only'}`}>
            {section.image && (
              <div className="image-container">
                <LazyLoadImage
                  src={section.image}
                  alt={section.title}
                />
              </div>
            )}
            <div className="text-container">
              {section.title && <h2>{section.title}</h2>}
              {renderSectionContent(section)}
              {section.audio && <button className="hear-story-button">Hear Story</button>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PovertyAndCorporateGreed;
