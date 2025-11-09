import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/challenges">Challenges</Link></li>
          <li><Link to="/community-ideas">Community Ideas</Link></li>
          <li><Link to="/get-involved">Get Involved</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
