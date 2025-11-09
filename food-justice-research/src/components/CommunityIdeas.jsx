import React, { useState } from 'react';
import './CommunityIdeas.css';
import '../index.css';
import headerBackground from '../assets/community-ideas/lNM99SIW9C84CO5V14Lr7nmp1s.jpg';
import ideaImage from '../assets/community-ideas/Sd001QxeO4hwIqVmW0kIJSxl5cU.jpg';
import { communityIdeas } from './CommunityIdeasData';
import Overlay from './Overlay';

const CommunityIdeas = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const openOverlay = (card) => {
    setSelectedCard(card);
  };

  const closeOverlay = () => {
    setSelectedCard(null);
  };

  return (
    <div style={{ backgroundColor: '#faf8ea' }}>
      <div className="masthead" style={{ backgroundImage: `url(${headerBackground})` }}>
        <div style={{ textAlign: 'center' }}>
          <h1>{communityIdeas.header.title}</h1>
          <p>{communityIdeas.header.subtitle}</p>
        </div>
      </div>
      <div style={{ padding: '0 40px 100px' }}>
        {communityIdeas.sections.map((section, index) => (
          <div key={index} style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontFamily: 'Urbanist, sans-serif', textAlign: 'center', marginBottom: '20px' }}>{section.title}</h2>
            <p style={{ fontSize: '18px', fontFamily: 'Inter Tight, sans-serif', textAlign: 'center', marginBottom: '40px' }}>{section.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {section.cards.map((card, cardIndex) => (
                <div key={cardIndex} style={{ flex: '1 0 300px', maxWidth: '320px', cursor: 'pointer' }} onClick={() => openOverlay(card)}>
                  <div className="idea-card">
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                      <img src={ideaImage} alt="" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                      <div style={{ flex: '1 0 0px' }}>
                        <h3 style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '18px' }}>{card.title}</h3>
                      </div>
                    </div>
                    <p style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: '18px', marginTop: '20px' }}>
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
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
