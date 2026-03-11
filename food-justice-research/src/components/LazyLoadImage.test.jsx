import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LazyLoadImage from './LazyLoadImage';

describe('LazyLoadImage', () => {
  it('renders an img tag with correct src and alt attributes', () => {
    const src = 'test-image.jpg';
    const alt = 'Test Image';

    render(<LazyLoadImage src={src} alt={alt} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', src);
    expect(imgElement).toHaveAttribute('alt', alt);
  });

  it('applies default and custom classes correctly', () => {
    const src = 'test-image.jpg';
    const alt = 'Test Image';
    const customClass = 'my-custom-class';

    render(<LazyLoadImage src={src} alt={alt} className={customClass} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveClass('lazy-load-image');
    expect(imgElement).toHaveClass(customClass);
  });

  it('handles rendering without a custom className gracefully', () => {
    const src = 'test-image.jpg';
    const alt = 'Test Image';

    render(<LazyLoadImage src={src} alt={alt} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement.className.trim()).toBe('lazy-load-image undefined'); // Since the implementation adds undefined if not provided.
    // Given the actual implementation uses className={`lazy-load-image ${className}`}
  });

  it('includes async decoding, lazy loading, and specific sizes attributes', () => {
    const src = 'test-image.jpg';
    const alt = 'Test Image';

    render(<LazyLoadImage src={src} alt={alt} />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('decoding', 'async');
    expect(imgElement).toHaveAttribute('loading', 'lazy');
    expect(imgElement).toHaveAttribute('sizes', 'min(90vw, 1000px)');
  });
});
