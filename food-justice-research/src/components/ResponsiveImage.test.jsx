import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResponsiveImage from './ResponsiveImage';

describe('ResponsiveImage', () => {
  it('renders a responsive image with srcset correctly', () => {
    const srcArray = ['/img.webp', '/img2.webp'];
    render(<ResponsiveImage src={srcArray} alt="test alt" />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/img.webp');
    expect(img).toHaveAttribute('srcset', '/img.webp 400w, /img2.webp 800w');
  });
});
