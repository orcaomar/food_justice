import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);
    event.target.reset();
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h3>Pages</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/challenges">Challenges</Link></li>
              <li><Link to="/community-ideas">Community Ideas</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
              <li><a href="https://drive.google.com/file/d/16kI8PQwdcJub4PZi6A5drXkgXQl25Hir/view?usp=sharing" target="_blank" rel="noopener noreferrer">Research Report</a></li>
              <li><a href="https://drive.google.com/file/d/164Xmyw9_4-CXNy9bDpjNHcbw3LB5l2JM/view?usp=sharing" target="_blank" rel="noopener noreferrer">Executive Summary</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your name" />
              <input type="email" name="email" placeholder="Your email" />
              <textarea name="message" placeholder="Your message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="https://www.engagedcommunities.ca/" target="_blank" rel="noopener noreferrer">Engaged Communities © 2023-2024</a>
      </div>
      <button className="back-to-top" onClick={scrollToTop}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 0L12.9282 5H7.0718L10 0Z" fill="white" />
          <path d="M10 20L10 4" stroke="white" strokeWidth="2" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
