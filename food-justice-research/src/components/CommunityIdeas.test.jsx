import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommunityIdeas from './CommunityIdeas';
import { communityIdeas } from './CommunityIdeasData';

describe('CommunityIdeas', () => {
  test('renders all section titles', () => {
    render(<CommunityIdeas />);
    communityIdeas.sections.forEach(section => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
    });
  });

  test('renders all card titles and text', () => {
    render(<CommunityIdeas />);
    communityIdeas.sections.forEach(section => {
      section.cards.forEach(card => {
        expect(screen.getByText(card.title)).toBeInTheDocument();
        expect(screen.getByText(card.text)).toBeInTheDocument();
      });
    });
  });

  test('renders header and intro text', () => {
    render(<CommunityIdeas />);
    expect(screen.getByText(communityIdeas.header.title)).toBeInTheDocument();
    expect(screen.getByText(communityIdeas.header.subtitle)).toBeInTheDocument();
    expect(screen.getByText(communityIdeas.intro.text)).toBeInTheDocument();
  });
});
