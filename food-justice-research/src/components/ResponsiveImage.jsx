import React from 'react';

/**
 * Renders a responsive image with srcset.
 *
 * @param {object} props - The component props.
 * @param {object|string} props.src - The image source object from vite-imagetools or a simple string for fallback.
 * @param {string} props.alt - The alt text for the image.
 * @returns {JSX.Element} The responsive image component.
 */
const ResponsiveImage = ({ src, alt, ...props }) => {
  // If src is just a string (e.g. for SVGs or non-optimized images), render a regular img tag.
  if (typeof src === 'string') {
    return <img src={src} alt={alt} {...props} />;
  }

  // If src is an array from vite-imagetools, construct the srcset string.
  const srcset = src.map((url, index) => {
    // Assuming the widths are 400, 800, 1200, etc.
    const width = 400 * (index + 1);
    return `${url} ${width}w`;
  }).join(', ');

  return (
    <img
      src={src[0]}
      srcSet={srcset}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default ResponsiveImage;
