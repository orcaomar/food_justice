import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
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
  });
});
