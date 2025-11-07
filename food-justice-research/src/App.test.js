import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders header with navigation links', () => {
  render(<App />);
  const navElement = screen.getByRole('navigation');
  const linkElement = within(navElement).getByText(/Research/i);
  expect(linkElement).toBeInTheDocument();
});
