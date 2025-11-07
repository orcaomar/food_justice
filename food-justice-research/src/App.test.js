import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders header with navigation links', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const navElement = screen.getByRole('navigation');
  const linkElement = within(navElement).getByText(/Research/i);
  expect(linkElement).toBeInTheDocument();
});
