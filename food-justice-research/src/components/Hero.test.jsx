import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByText('Flemingdon & Thorncliffe Food Justice')).toBeInTheDocument();
  });

  it('renders the background video with correct attributes', () => {
    const { container } = render(<Hero />);
    const video = container.querySelector('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('loop');
    expect(video).toHaveAttribute('muted');
    expect(video).toHaveAttribute('playsinline');
    expect(video).toHaveAttribute('autoplay');
  });

  it('renders the "See Video" link with correct href', () => {
    render(<Hero />);
    const link = screen.getByRole('link', { name: /see video/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://youtu.be/h1124yB9sc0?si=Zu4JN6y5PCmsJX5g');
  });
});
