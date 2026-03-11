import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  it('renders correctly', () => {
    render(<Logo />);
    const imgElement = screen.getByRole('img', { name: /Food Justice Logo/i });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', expect.stringContaining('logo'));
    expect(imgElement).toHaveClass('logo');
  });
});
