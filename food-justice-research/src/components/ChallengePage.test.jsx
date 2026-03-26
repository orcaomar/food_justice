import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ChallengePage from './ChallengePage';
import { trackEvent } from '../utils/google-analytics';

// Mock child components
vi.mock('./ResponsiveImage', () => ({
  default: ({ src, alt, ...props }) => <img src={src} alt={alt} {...props} data-testid="responsive-image" />
}));

vi.mock('./Overlay', () => ({
  default: ({ isOpen, onClose, title, audioSrc, transcript }) => (
    isOpen ? (
      <div data-testid="overlay">
        <h1>{title}</h1>
        <audio src={audioSrc} data-testid="audio" />
        <div>{transcript}</div>
        <button onClick={onClose}>Close</button>
      </div>
    ) : null
  )
}));

vi.mock('./Challenges', () => ({
  default: () => <div data-testid="challenges-component" />
}));

// Mock tracking utility
vi.mock('../utils/google-analytics', () => ({
  trackEvent: vi.fn()
}));

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock requestAnimationFrame
window.requestAnimationFrame = vi.fn((callback) => callback());

describe('ChallengePage Component', () => {
  const mockData = {
    title: 'Test Challenge',
    image: 'test-image.jpg',
    subTitle: 'Test Subtitle',
    sections: [
      {
        title: 'Section 1',
        text: 'Text with <a href="http://example.com" target="_blank">link</a>',
        image: 'section1-image.jpg',
        audio: 'section1-audio.mp3',
        transcript: 'Transcript 1'
      },
      {
        title: 'Section 2',
        text: 'Plain text',
        mapUrl: 'https://example.com/map'
      }
    ]
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with title, image and subtitle', () => {
    render(<ChallengePage data={mockData} />);

    expect(screen.getByText('Test Challenge')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();

    const mainImage = screen.getAllByTestId('responsive-image')[0];
    expect(mainImage).toHaveAttribute('src', 'test-image.jpg');
    expect(mainImage).toHaveAttribute('loading', 'eager');
    expect(mainImage).toHaveAttribute('fetchpriority', 'high');
  });

  it('updates document title on mount', () => {
    render(<ChallengePage data={mockData} />);
    expect(document.title).toBe('Test Challenge | Flemingdon & Thorncliffe Food Justice | Toronto, Canada');
  });

  it('renders sections with correct classes and order', () => {
    render(<ChallengePage data={mockData} />);

    const sections = document.querySelectorAll('.section');
    expect(sections).toHaveLength(2);

    // First section has image and is even (index 0)
    expect(sections[0]).toHaveClass('image-left');

    // Second section has no image
    expect(sections[1]).toHaveClass('text-only');
  });

  it('renders section content: text vs iframe', () => {
    render(<ChallengePage data={mockData} />);

    // Section 1: Text content
    const section1 = document.querySelectorAll('.section')[0];
    expect(within(section1).getByText('link')).toBeInTheDocument();

    // Section 2: iframe for mapUrl
    const iframe = screen.getByTitle('Section 2 map');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://example.com/map');
    expect(iframe).toHaveAttribute('sandbox', 'allow-scripts allow-same-origin');
    expect(iframe).toHaveAttribute('loading', 'lazy');
  });

  it('opens and closes overlay for audio content', () => {
    render(<ChallengePage data={mockData} />);

    const hearStoryButton = screen.getByLabelText('Hear story about Section 1');
    fireEvent.click(hearStoryButton);

    expect(trackEvent).toHaveBeenCalledWith('Challenge Listening Overlay', 'Open', 'Section 1');
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    expect(screen.getByText('Transcript 1')).toBeInTheDocument();

    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);

    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument();
  });

  it('applies DOMPurify hook for target="_blank" links', () => {
    render(<ChallengePage data={mockData} />);

    const link = screen.getByText('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('sets default transform scale and observes sections', () => {
    render(<ChallengePage data={mockData} />);

    expect(mockIntersectionObserver).toHaveBeenCalled();
    const observerInstance = mockIntersectionObserver.mock.results[0].value;
    expect(observerInstance.observe).toHaveBeenCalled();
  });
});
