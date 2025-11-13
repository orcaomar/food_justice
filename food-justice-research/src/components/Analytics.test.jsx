import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import App from '../App';

vi.mock('react-ga4');

describe('Analytics', () => {
  const originalNodeEnv = process.env.NODE_ENV;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.NODE_ENV = originalNodeEnv;
  });

  afterEach(() => {
    process.env.NODE_ENV = originalNodeEnv;
  });

  test('initializes Google Analytics on app load in production', () => {
    process.env.NODE_ENV = 'production';
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(ReactGA.initialize).toHaveBeenCalledWith('G-YGFJP6NY5D');
    expect(ReactGA.initialize).toHaveBeenCalledTimes(1);
  });

  test('tracks pageview on route change in production', () => {
    process.env.NODE_ENV = 'production';
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // The initial page load should trigger a pageview
    expect(ReactGA.send).toHaveBeenCalledWith({ hitType: 'pageview', page: '/' });

    // Navigate to another page using a specific selector
    const header = getByRole('banner'); // The <header> element
    const researchLink = within(header).getByText(/research/i);
    fireEvent.click(researchLink);

    // After navigation, a new pageview should be tracked
    expect(ReactGA.send).toHaveBeenCalledWith({ hitType: 'pageview', page: '/research' });
    expect(ReactGA.send).toHaveBeenCalledTimes(2);
  });

  test('does not initialize or track pageview when not in production', () => {
    process.env.NODE_ENV = 'test'; // Explicitly set for clarity
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(ReactGA.initialize).not.toHaveBeenCalled();
    expect(ReactGA.send).not.toHaveBeenCalled();
  });
});
