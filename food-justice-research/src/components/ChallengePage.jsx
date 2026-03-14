import React, { useState, useEffect, useRef } from 'react';
import DOMPurify from 'dompurify';
import ResponsiveImage from './ResponsiveImage';
import Overlay from './Overlay';
import { trackEvent } from '../utils/google-analytics';
import Challenges from './Challenges';
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
  const [overlayData, setOverlayData] = useState(null);

  const openOverlay = (section) => {
    setOverlayData(section);
    trackEvent('Challenge Listening Overlay', 'Open', section.title);
  };

  const closeOverlay = () => {
    setOverlayData(null);
  };

  useEffect(() => {
    document.title = `${title} | Flemingdon & Thorncliffe Food Justice | Toronto, Canada`;
  }, [title]);

  useEffect(() => {
    let ticking = false;

    const updateTransforms = () => {
      const viewportHeight = window.innerHeight;
      const sectionUpdates = [];

      // READ phase: Get all bounding boxes without writing to the DOM
      sectionRefs.current.forEach((section, index) => {
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
          sectionUpdates.push({ section, clampedScale });
        }
      });

      // WRITE phase: Update all styles at once
      sectionUpdates.forEach(({ section, clampedScale }) => {
        section.style.transform = `scale(${clampedScale})`;
      });

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateTransforms);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateTransforms(); // Run on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ticking = false; // Reset ticking flag on unmount
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const renderSectionContent = (section) => {
    if (section.mapUrl) {
      return (
        <iframe
          width="100%"
          height="632"
          style={{ border: 'none' }}
          src={section.mapUrl}
          title={`${section.title} map`}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      );
    }
    return (
      <p
        style={{ whiteSpace: 'pre-wrap' }}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(section.text) }}
      />
    );
  };

  return (
    <div className="challenge-page">
      <h1>{title}</h1>
      <ResponsiveImage
        src={image}
        alt={title}
        className="main-image"
        loading="eager"
        fetchPriority="high"
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
                <ResponsiveImage
                  src={section.image}
                  alt={section.title}
                />
              </div>
            )}
            <div className="text-container">
              {section.title && <h2>{section.title}</h2>}
              {renderSectionContent(section)}
              {section.audio && (
                <button className="hear-story-button" onClick={() => openOverlay(section)}>
                  Hear Story
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {overlayData && (
        <Overlay
          isOpen={!!overlayData}
          onClose={closeOverlay}
          title={overlayData.title}
          audioSrc={overlayData.audio}
          transcript={overlayData.transcript}
        />
      )}
      <Challenges />
    </div>
  );
};

export default ChallengePage;
