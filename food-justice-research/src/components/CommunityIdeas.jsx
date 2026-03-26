import React, { useState, useMemo, useCallback } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './CommunityIdeas.css';
import '../index.css';
import headerBackground from '../assets/community-ideas/lNM99SIW9C84CO5V14Lr7nmp1s.jpg?w=400;800;1200&format=webp;jpg&srcset';
import ideaImage from '../assets/community-ideas/Sd001QxeO4hwIqVmW0kIJSxl5cU.jpg?w=60;120&format=webp;jpg&srcset';
import { communityIdeas } from './CommunityIdeasData';
import Overlay from './Overlay';
import ResponsiveImage from './ResponsiveImage';
import { trackEvent } from '../utils/google-analytics';

const CommunityIdeas = () => {
  useDocumentTitle('Community Ideas | Flemingdon & Thorncliffe Food Justice | Toronto, Canada');
  const [selectedCard, setSelectedCard] = useState(null);

  const openOverlay = useCallback((card) => {
    trackEvent('Ideas Listening Overlay', 'Open', card.title);
    setSelectedCard(card);
  }, []);

  const closeOverlay = useCallback(() => {
    setSelectedCard(null);
  }, []);

  // ⚡ Bolt: Memoize the rendered sections to prevent unnecessary re-renders
  // of the entire list and its child <ResponsiveImage> components every time
  // `selectedCard` state changes (e.g., when opening/closing the overlay).
  // This reduces React reconciliation overhead and main thread work.
  const renderedSections = useMemo(() => {
    return communityIdeas.sections.map((section, index) => (
      <div key={index} style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '36px', fontFamily: 'Urbanist, sans-serif', textAlign: 'center', marginBottom: '20px' }}>{section.title}</h2>
        <p style={{ fontSize: '18px', fontFamily: 'Inter Tight, sans-serif', textAlign: 'center', marginBottom: '40px' }}>{section.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {section.cards.map((card, cardIndex) => (
            <button
              key={cardIndex}
              className="idea-card-button"
              style={{ flex: '1 0 300px', maxWidth: '320px', cursor: 'pointer' }}
              onClick={() => openOverlay(card)}
              aria-label={`Open details for ${card.title}`}
            >
              <div className="idea-card">
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <ResponsiveImage src={ideaImage} alt="" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                  <div style={{ flex: '1 0 0px' }}>
                    <h3 style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '18px' }}>{card.title}</h3>
                  </div>
                </div>
                <p style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '18px', marginTop: '20px' }}>
                  {card.text}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    ));
  }, [openOverlay]);

  // ⚡ Bolt: Memoize the rendered sections to prevent unnecessary re-renders of the entire
  // list and its child <ResponsiveImage> components every time `selectedCard` state changes
  // (e.g., when the user opens or closes the overlay).
  // This reduces React reconciliation overhead and main thread work.
  const renderedSections = useMemo(() => {
    return communityIdeas.sections.map((section, index) => (
      <div key={index} style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '36px', fontFamily: 'Urbanist, sans-serif', textAlign: 'center', marginBottom: '20px' }}>{section.title}</h2>
        <p style={{ fontSize: '18px', fontFamily: 'Inter Tight, sans-serif', textAlign: 'center', marginBottom: '40px' }}>{section.description}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {section.cards.map((card, cardIndex) => (
            <button
              key={cardIndex}
              className="idea-card-button"
              style={{ flex: '1 0 300px', maxWidth: '320px', cursor: 'pointer' }}
              onClick={() => openOverlay(card)}
              aria-label={`Open details for ${card.title}`}
            >
              <div className="idea-card">
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <ResponsiveImage src={ideaImage} alt="" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                  <div style={{ flex: '1 0 0px' }}>
                    <h3 style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '18px' }}>{card.title}</h3>
                  </div>
                </div>
                <p style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '18px', marginTop: '20px' }}>
                  {card.text}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    ));
  }, [openOverlay]);

  return (
    <div className="community-ideas">
      <div className="masthead">
        {/* ⚡ Bolt: LCP Optimization - Load above-the-fold masthead eagerly with high priority to improve LCP */}
        <ResponsiveImage
          src={headerBackground}
          alt="Community gathering"
          className="masthead-image"
          loading="eager"
          fetchpriority="high"
        />
        <div className="masthead-overlay">
          <h1>{communityIdeas.header.title}</h1>
          <p>{communityIdeas.header.subtitle}</p>
        </div>
      </div>

      <div style={{ padding: '0 40px 100px' }}>
        {renderedSections}
      </div>
      {selectedCard && (
        <Overlay
          isOpen={!!selectedCard}
          onClose={closeOverlay}
          title={selectedCard.title}
          audioSrc={selectedCard.audioSrc}
          transcript={selectedCard.transcript}
        />
      )}
    </div>
  );
};

export default CommunityIdeas;
