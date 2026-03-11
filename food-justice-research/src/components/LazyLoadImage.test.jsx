import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LazyLoadImage from './LazyLoadImage';

describe('LazyLoadImage', () => {
  it('renders correctly with required props', () => {
    render(
      <LazyLoadImage
        src="test-image.jpg"
        alt="Test alt text"
      />
    );

    const imgElement = screen.getByRole('img');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', 'test-image.jpg');
    expect(imgElement).toHaveAttribute('alt', 'Test alt text');
    expect(imgElement).toHaveClass('lazy-load-image');
    expect(imgElement).toHaveAttribute('decoding', 'async');
    expect(imgElement).toHaveAttribute('loading', 'lazy');
    expect(imgElement).toHaveAttribute('sizes', 'min(90vw, 1000px)');
  });

  it('combines custom className with default class', () => {
    render(
      <LazyLoadImage
        src="test-image.jpg"
        alt="Test alt text"
        className="custom-class"
      />
    );

    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveClass('lazy-load-image');
    expect(imgElement).toHaveClass('custom-class');
  });

  it('renders correctly when className is not provided', () => {
    render(
      <LazyLoadImage
        src="test-image.jpg"
        alt="Test alt text"
      />
    );

    const imgElement = screen.getByRole('img');

    expect(imgElement.className.trim()).toBe('lazy-load-image undefined');
  });
});
