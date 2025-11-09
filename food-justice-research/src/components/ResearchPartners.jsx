import React from 'react';
import './ResearchPartners.css';

import glrcLogo from '../assets/homepage/WbBmw3LbP9U5cxLGBwfo05KE.png';
import yorkUniversityLogo from '../assets/homepage/tIdSXv4YUTS0SsDH8i7a3D303bY.png';
import engagedCommunitiesLogo from '../assets/homepage/VmV4RVXobvowxtGG8DKealkTzFU.png';
import tnoLogo from '../assets/homepage/avplOd44uc0hiIzfqKWqoDYSU.png';
import sshrcLogo from '../assets/homepage/bfESyuSZFewOEjYqQwatWtTt61s.png';

const ResearchPartners = () => {
  return (
    <section className="research-partners">
      <h2>Research Partners</h2>
      <div className="partner-logos">
        <img src={glrcLogo} alt="GLRC Wordmark" />
        <img src={yorkUniversityLogo} alt="York University" />
        <img src={engagedCommunitiesLogo} alt="Engaged Communities" />
        <img src={tnoLogo} alt="TNO" />
      </div>
      <p>This site draws on research supported by the Social Sciences and Humanities Research Council.</p>
      <img src={sshrcLogo} alt="SSHRC" className="sshrc-logo" />
    </section>
  );
};

export default ResearchPartners;
