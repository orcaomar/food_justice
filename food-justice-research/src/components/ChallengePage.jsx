import React, { useEffect, useRef } from 'react';
import LazyLoadImage from './LazyLoadImage';
import './ChallengePage.css';

// You can tweak these values to adjust the zoom effect
const MIN_SCALE = 0.8; // The smallest the section will be
const MAX_SCALE = 1.0; // The largest the section will be (full size)
// Defines the "zoom zone" in the viewport.
// 0.1 means the zoom starts when the top of the section is 10% from the bottom of the screen.
// 0.8 means the zoom finishes when the top of the section is 80% from the bottom of the screen.
const ZOOM_START_THRESHOLD = 0.1;
const ZOOM_END_THRESHOLD = 0.8;


const ChallengePage = ({ data }) => {
  const { title, image, subTitle, sections } = data;
  const sectionRefs = useRef([]);

  useEffect(() => {
    document.title = `${title} | Flemingdon & Thorncliffe Food Justice | Toronto, Canada`;
  }, [title]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      sectionRefs.current.forEach(section => {
        if (section) {
          const { top } = section.getBoundingClientRect();
          const positionInViewport = top / viewportHeight;

          // Invert the position so 0 is bottom and 1 is top
          const scrollProgress = 1 - positionInViewport;

          let scale;

          if (scrollProgress <= ZOOM_START_THRESHOLD) {
            // Below the zoom zone, stay at min scale
            scale = MIN_SCALE;
          } else if (scrollProgress >= ZOOM_END_THRESHOLD) {
            // Above the zoom zone, stay at max scale
            scale = MAX_SCALE;
          } else {
            // Inside the zoom zone, calculate scale linearly
            const progressInZoomZone = (scrollProgress - ZOOM_START_THRESHOLD) / (ZOOM_END_THRESHOLD - ZOOM_START_THRESHOLD);
            scale = MIN_SCALE + (MAX_SCALE - MIN_SCALE) * progressInZoomZone;
          }

          // Clamp the scale just in case
          const clampedScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale));
          section.style.transform = `scale(${clampedScale})`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const renderSectionContent = (section) => {
    if (section.map) {
      return <div dangerouslySetInnerHTML={{ __html: section.map }} />;
    }
    return <p>{section.text}</p>;
  };

  return (
    <div className="challenge-page">
      <h1>{title}</h1>
      <LazyLoadImage
        src={image}
        alt={title}
        className="main-image"
      />
      <p className="summary">{subTitle}</p>

      <div className="sections">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`section ${section.image ? (index % 2 === 0 ? 'image-left' : 'image-right') : 'text-only'}`}
            ref={el => sectionRefs.current[index] = el}
          >
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

export default ChallengePage;
