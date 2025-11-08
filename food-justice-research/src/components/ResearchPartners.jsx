import React from 'react';
import './ResearchPartners.css';

const ResearchPartners = () => {
  return (
    <section className="research-partners">
      <h2>Research Partners</h2>
      <div className="partner-logos">
        <img src="https://framerusercontent.com/images/WbBmw3LbP9U5cxLGBwfo05KE.png" alt="GLRC Wordmark" />
        <img src="https://framerusercontent.com/images/tIdSXv4YUTS0SsDH8i7a3D303bY.png" alt="York University" />
        <img src="https://framerusercontent.com/images/VmV4RVXobvowxtGG8DKealkTzFU.png" alt="Engaged Communities" />
        <img src="https://framerusercontent.com/images/avplOd44uc0hiIzfqKWqoDYSU.png" alt="TNO" />
      </div>
      <p>This site draws on research supported by the Social Sciences and Humanities Research Council.</p>
      <img src="https://framerusercontent.com/images/bfESyuSZFewOEjYqQwatWtTt61s.png" alt="SSHRC" className="sshrc-logo" />
    </section>
  );
};

export default ResearchPartners;
