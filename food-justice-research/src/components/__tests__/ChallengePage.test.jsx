import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import ChallengePage from '../ChallengePage';
import { trackEvent } from '../../utils/google-analytics';
import DOMPurify from 'dompurify';

// Mock child components
vi.mock('../ResponsiveImage', () => ({
  default: ({ src, alt, className, loading, fetchpriority }) => (
    <img src={src} alt={alt} className={className} loading={loading} fetchpriority={fetchpriority} data-testid="responsive-image" />
  ),
}));

vi.mock('../Overlay', () => ({
  default: ({ isOpen, onClose, title }) => (
    isOpen ? (
      <div data-testid="overlay">
        <h2>{title} Overlay</h2>
        <button onClick={onClose} data-testid="close-overlay">Close</button>
      </div>
    ) : null
  ),
}));

vi.mock('../Challenges', () => ({
  default: () => <div data-testid="challenges">Challenges Component</div>,
}));

// Mock Google Analytics utility
vi.mock('../../utils/google-analytics', () => ({
  trackEvent: vi.fn(),
}));

// Mock IntersectionObserver
const mockObserve = vi.fn();
const mockUnobserve = vi.fn();
const mockDisconnect = vi.fn();

class MockIntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }
  observe = mockObserve;
  unobserve = mockUnobserve;
  disconnect = mockDisconnect;
}

window.IntersectionObserver = MockIntersectionObserver;

const mockData = {
  title: 'Test Title',
  image: 'test-image.jpg',
  subTitle: 'Test Subtitle',
  sections: [
    {
      title: 'Section 1',
      text: 'Text for section 1',
      image: 'section1.jpg',
    },
    {
      title: 'Section 2',
      text: 'Text for section 2 with <a href="https://example.com" target="_blank">link</a>',
      audio: 'audio.mp3',
      transcript: 'Transcript for section 2',
    },
    {
      title: 'Section 3',
      mapUrl: 'https://example.com/map',
    }
  ]
};

describe('ChallengePage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.title = '';
  });

  it('renders main layout correctly including LCP image', () => {
    render(<ChallengePage data={mockData} />);

    // Check title and subtitle
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Title');
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();

    // Check document.title side effect
    expect(document.title).toBe('Test Title | Flemingdon & Thorncliffe Food Justice | Toronto, Canada');

    // Check main LCP image
    const images = screen.getAllByTestId('responsive-image');
    const mainImage = images.find(img => img.getAttribute('src') === 'test-image.jpg');
    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute('loading', 'eager');
    expect(mainImage).toHaveAttribute('fetchpriority', 'high');
  });

  it('renders conditional sections with alternating classes', () => {
    const { container } = render(<ChallengePage data={mockData} />);

    const sections = container.querySelectorAll('.section');
    expect(sections).toHaveLength(3);

    // Section 1: Has image, index 0 (even) -> 'image-left'
    expect(sections[0]).toHaveClass('image-left');

    // Section 2: No image -> 'text-only'
    expect(sections[1]).toHaveClass('text-only');

    // Section 3: No image (has mapUrl) -> 'text-only'
    expect(sections[2]).toHaveClass('text-only');
  });

  it('renders content types correctly (text vs iframe)', () => {
    const { container } = render(<ChallengePage data={mockData} />);

    // Section 1: Text content
    expect(screen.getByText('Text for section 1')).toBeInTheDocument();

    // Section 3: Iframe Map
    const iframe = container.querySelector('iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://example.com/map');
    expect(iframe).toHaveAttribute('sandbox', 'allow-scripts allow-same-origin');
    expect(iframe).toHaveAttribute('loading', 'lazy');
  });

  it('handles user interaction with "Hear Story" button and Overlay', () => {
    render(<ChallengePage data={mockData} />);

    // "Hear Story" button should only be rendered for section 2 (which has audio)
    const hearStoryButtons = screen.getAllByRole('button', { name: /Hear story about/i });
    expect(hearStoryButtons).toHaveLength(1);

    // Click to open overlay
    fireEvent.click(hearStoryButtons[0]);

    // Overlay should be open and display the correct title
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    expect(screen.getByText('Section 2 Overlay')).toBeInTheDocument();

    // Verify trackEvent was called
    expect(trackEvent).toHaveBeenCalledWith('Challenge Listening Overlay', 'Open', 'Section 2');

    // Close overlay
    const closeButton = screen.getByTestId('close-overlay');
    fireEvent.click(closeButton);

    // Overlay should be closed
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument();
  });

  it('secures external links via DOMPurify hook', () => {
    // Force DOMPurify hooks to execute correctly by simulating render
    render(<ChallengePage data={mockData} />);

    // The link should have rel="noopener noreferrer"
    const link = screen.getByRole('link', { name: 'link' });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('initializes IntersectionObserver for scroll animations', () => {
    render(<ChallengePage data={mockData} />);

    // Ensure all section refs are observed
    expect(mockObserve).toHaveBeenCalledTimes(3);
  });
});
