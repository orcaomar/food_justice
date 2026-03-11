import { render, screen, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ScrollToTop from './ScrollToTop';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('ScrollToTop', () => {
  beforeEach(() => {
    window.scrollTo = vi.fn();
  });

  it('calls window.scrollTo on initial render', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <ScrollToTop />
        </MemoryRouter>
      );
    });

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  it('calls window.scrollTo when pathname changes', async () => {
    const user = userEvent.setup();

    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <ScrollToTop />
          <Link to="/about">Go to About</Link>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/about" element={<div>About</div>} />
          </Routes>
        </MemoryRouter>
      );
    });

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(window.scrollTo).toHaveBeenCalledTimes(1);

    await act(async () => {
      await user.click(screen.getByText('Go to About'));
    });

    expect(window.scrollTo).toHaveBeenCalledTimes(2);
  });

  it('renders nothing (returns null)', async () => {
    let container;
    await act(async () => {
      const rendered = render(
        <MemoryRouter initialEntries={['/']}>
          <ScrollToTop />
        </MemoryRouter>
      );
      container = rendered.container;
    });

    expect(container.firstChild).toBeNull();
  });
});
