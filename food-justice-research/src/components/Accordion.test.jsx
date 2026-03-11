import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './Accordion';

describe('Accordion', () => {
  const title = 'Test Title';
  const content = 'Test Content';

  it('renders the title and initial "+" icon', () => {
    render(<Accordion title={title} content={content} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('initially does not display the content', () => {
    render(<Accordion title={title} content={content} />);

    expect(screen.queryByText(content)).not.toBeInTheDocument();
  });

  it('displays the content and changes icon to "-" when clicked', () => {
    render(<Accordion title={title} content={content} />);

    const titleElement = screen.getByText(title);
    fireEvent.click(titleElement);

    expect(screen.getByText(content)).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.queryByText('+')).not.toBeInTheDocument();
  });

  it('hides the content and changes icon to "+" when clicked twice', () => {
    render(<Accordion title={title} content={content} />);

    const titleElement = screen.getByText(title);

    // First click to open
    fireEvent.click(titleElement);
    expect(screen.getByText(content)).toBeInTheDocument();

    // Second click to close
    fireEvent.click(titleElement);
    expect(screen.queryByText(content)).not.toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.queryByText('-')).not.toBeInTheDocument();
  });
});
