import React from 'react';
import './LazyLoadImage.css';

const LazyLoadImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`lazy-load-image ${className}`}
      decoding="async"
      loading="lazy"
      sizes="min(90vw, 1000px)"
    />
  );
};

export default LazyLoadImage;
