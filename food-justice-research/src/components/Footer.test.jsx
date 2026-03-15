import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

// Mock the global fetch API to simulate a successful form submission
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
);

describe('Footer', () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = vi.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({})
    }));
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('should show "Message submitted." after form submission', async () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const nameInput = screen.getByPlaceholderText('Your name');
    const emailInput = screen.getByPlaceholderText('Your email');
    const messageInput = screen.getByPlaceholderText('Your message');
    const sendButton = screen.getByText('Send');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, world!' } });

    fireEvent.click(sendButton);

    await screen.findByText('Message submitted.');
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
