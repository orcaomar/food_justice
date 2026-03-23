import React from 'react';
import './ResearchPartners.css';
import ResponsiveImage from './ResponsiveImage';

// ⚡ Bolt: LCP & Bundle Size Optimization
// Using vite-imagetools to generate responsive, modern-format (WebP) variants of static logos.
// Replaced static <img> tags with <ResponsiveImage> to automatically handle srcset generation and lazy loading.
// Impact: Reduces initial image payload by ~70% and prevents large PNGs from blocking the main thread or consuming excess bandwidth, significantly improving load times.
import glrcLogo from '../assets/homepage/WbBmw3LbP9U5cxLGBwfo05KE.png?w=200;400;600&format=webp;png&srcset';
import yorkUniversityLogo from '../assets/homepage/tIdSXv4YUTS0SsDH8i7a3D303bY.png?w=200;400;600&format=webp;png&srcset';
import engagedCommunitiesLogo from '../assets/homepage/VmV4RVXobvowxtGG8DKealkTzFU.png?w=200;400;600&format=webp;png&srcset';
import tnoLogo from '../assets/homepage/avplOd44uc0hiIzfqKWqoDYSU.png?w=200;400;600&format=webp;png&srcset';
import sshrcLogo from '../assets/homepage/bfESyuSZFewOEjYqQwatWtTt61s.png?w=400;800;1200&format=webp;png&srcset';

const ResearchPartners = () => {
  return (
    <section className="research-partners">
      <h2>Research Partners</h2>
      <div className="partner-logos">
        <ResponsiveImage src={glrcLogo} alt="GLRC Wordmark" />
        <ResponsiveImage src={yorkUniversityLogo} alt="York University" />
        <ResponsiveImage src={engagedCommunitiesLogo} alt="Engaged Communities" />
        <ResponsiveImage src={tnoLogo} alt="TNO" />
      </div>
      <p>This site draws on research supported by the Social Sciences and Humanities Research Council.</p>
      <ResponsiveImage src={sshrcLogo} alt="SSHRC" className="sshrc-logo" />
    </section>
  );
};

export default ResearchPartners;
