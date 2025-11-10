import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Research from './Research';

test('renders Research component without crashing', () => {
  render(
    <MemoryRouter>
      <Research />
    </MemoryRouter>
  );
  expect(screen.getByText('Our Research')).toBeInTheDocument();
});
