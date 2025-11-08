import React from 'react';
import { render, screen } from '@testing-library/react';
import Research from './Research';

test('renders Research component without crashing', () => {
  render(<Research />);
  expect(screen.getByText('Our Research')).toBeInTheDocument();
});
