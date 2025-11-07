import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders header with navigation links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const navElement = screen.getByRole('navigation');
  const linkElement = within(navElement).getByText(/Research/i);
  expect(linkElement).toBeInTheDocument();
});
