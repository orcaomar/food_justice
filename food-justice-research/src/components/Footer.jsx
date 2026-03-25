import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // 🛡️ Sentinel: Add timeout to external API calls to prevent hanging requests
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8-second timeout

    try {
      const response = await fetch("https://submit-form.com/vj5Mry2QV", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === "AbortError") {
        setSubmitError("The request timed out. Please try again later.");
      } else {
        setSubmitError(
          "An error occurred while submitting your message. Please try again later.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/research">Research</Link>
              </li>
              <li>
                <Link to="/challenges">Challenges</Link>
              </li>
              <li>
                <Link to="/community-ideas">Community Ideas</Link>
              </li>
              <li>
                <Link to="/get-involved">Get Involved</Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1unQy70cFTCWkmr3pEqioJu2WEqgX4aTS/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Research Report
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/164Xmyw9_4-CXNy9bDpjNHcbw3LB5l2JM/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Executive Summary
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Get In Touch</h3>
            {submitted ? (
              <div>Message submitted.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                {submitError && (
                  <div
                    className="error-message"
                    style={{ color: "#d32f2f", marginBottom: "10px" }}
                  >
                    {submitError}
                  </div>
                )}
                {/* 🛡️ Sentinel: Enforce input length limits to prevent oversized payload DoS */}
                <input
                  type="text"
                  name="name"
                  aria-label="Your name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength="100"
                />
                <input
                  type="email"
                  name="email"
                  aria-label="Your email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength="150"
                />
                <textarea
                  name="message"
                  aria-label="Your message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength="1000"
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a
          href="https://www.engagedcommunities.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Engaged Communities © 2023-2024
        </a>
      </div>
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 0L12.9282 5H7.0718L10 0Z" fill="white" />
          <path d="M10 20L10 4" stroke="white" strokeWidth="2" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
