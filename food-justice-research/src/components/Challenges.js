import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Challenges.css';

const Challenges = () => {
  return (
    <section className="challenges">
      <h2>Challenges</h2>
      <Carousel>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Challenge 1" />
          <p className="legend">Gentrification and industrialization of food systems threaten local food cultures and practices.</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Challenge 2" />
          <p className="legend">Ongoing colonialism and the dispossession of Indigenous Peoples from their lands and food systems.</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" alt="Challenge 3" />
          <p className="legend">Mainstream food movements have failed to meaningfully address systemic racism in the food system.</p>
        </div>
      </Carousel>
    </section>
  );
};

export default Challenges;
