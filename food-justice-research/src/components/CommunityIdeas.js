import React from 'react';
import './CommunityIdeas.css';

const CommunityIdeas = () => {
  return (
    <section className="community-ideas">
      <div className="ideas-content">
        <div className="ideas-text">
          <h2>Community Ideas</h2>
          <p>Residents and workers bring a wealth of skills, knowledge, experience and ideas to make meaningful change. Ideas about jobs, rent, alternatives to food banks, addressing power imbalances, and more.</p>
          <a href="https://foodjusticeresearch.ca/community-ideas" className="learn-more-button">Learn more</a>
        </div>
        <div className="ideas-image">
          <img src="https://framerusercontent.com/images/ZhtHHWs7yysQOKzrO7Hv6NRLEM.jpg" alt="Community Ideas" />
        </div>
      </div>
      <div className="stories-carousel">
        <h2>Explore Stories</h2>
        <div className="carousel-container">
          <div className="carousel-track">
            <a href="https://foodjusticeresearch.ca/community-ideas#relationship-building" className="carousel-slide">
              <img src="https://framerusercontent.com/images/TdmyTfbpIpNpsRrBEgIf4V9yP8.png" alt="Relationship Building" />
            </a>
            <a href="https://foodjusticeresearch.ca/community-ideas#advocacy" className="carousel-slide">
              <img src="https://framerusercontent.com/images/6vP42Sc062MlqLG8Jxib1kxo.jpg" alt="Advocacy" />
            </a>
            <a href="https://foodjusticeresearch.ca/community-ideas#alternatives" className="carousel-slide">
              <img src="https://framerusercontent.com/images/aGej5ERlKImaCh68lG8gZUOocOQ.png" alt="Alternatives" />
            </a>
            <a href="https://foodjusticeresearch.ca/challenges-stigmatization#shame" className="carousel-slide">
              <img src="https://framerusercontent.com/images/o0EBedslZ6R9dPX4PJ5THCzpY.jpg" alt="Shame" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityIdeas;
