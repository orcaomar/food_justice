import React from 'react';
import { Link } from 'react-router-dom';
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
          <li><Link to="/research">Research</Link></li>
          <li><a href="https://foodjusticeresearch.ca/challenges">Challenges</a></li>
          <li><a href="https://foodjusticeresearch.ca/community-ideas">Ideas</a></li>
          <li><a href="https://foodjusticeresearch.ca/get-involved">Get Involved</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
