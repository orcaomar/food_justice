import React from 'react';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Logo />
      </div>
      <nav>
        <ul>
          <li><a href="https://foodjusticeresearch.ca/research">Research</a></li>
          <li><a href="https://foodjusticeresearch.ca/challenges">Challenges</a></li>
          <li><a href="https://foodjusticeresearch.ca/community-ideas">Ideas</a></li>
          <li><a href="https://foodjusticeresearch.ca/get-involved">Get Involved</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
