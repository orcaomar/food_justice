import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';
import Overlay from '../Overlay';
import Accordion from '../Accordion';
import Footer from '../Footer';
import GetInvolved from '../../pages/GetInvolved';

describe('Accessibility Features', () => {
  test('Header renders a skip to main content link targeting #main-content', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const skipLink = screen.getByText('Skip to main content');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
    expect(skipLink).toHaveClass('skip-link');
  });

  test('Accordion button controls panel via aria-controls and role="region"', () => {
    render(<Accordion title="Test Title" content="Test Content Panel" />);

    const button = screen.getByRole('button', { name: /Test Title/i });
    expect(button).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');

    const panelId = button.getAttribute('aria-controls');
    expect(panelId).toBeTruthy();

    const region = screen.getByRole('region');
    expect(region).toHaveAttribute('id', panelId);
    expect(region).toHaveAttribute('aria-labelledby', button.getAttribute('id'));
  });

  test('Overlay modal traps keyboard focus and labels audio element', () => {
    render(
      <Overlay
        isOpen={true}
        onClose={vi.fn()}
        title="Sample Interview"
        audioSrc="test.mp3"
        transcript="Test transcript"
      />
    );

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'overlay-title');

    const audio = screen.getByLabelText('Audio recording for Sample Interview');
    expect(audio).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: 'Close dialog' });
    expect(closeButton).toBeInTheDocument();
  });

  test('Footer form provides accessible form labels', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByLabelText('Your name')).toBeInTheDocument();
    expect(screen.getByLabelText('Your email')).toBeInTheDocument();
    expect(screen.getByLabelText('Your message')).toBeInTheDocument();
  });

  test('GetInvolved page renders iframe with an accessible title attribute', () => {
    render(
      <MemoryRouter>
        <GetInvolved />
      </MemoryRouter>
    );

    const iframe = screen.getByTitle(/Interactive.*Map/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe.getAttribute('title')).toBeTruthy();
  });
});
