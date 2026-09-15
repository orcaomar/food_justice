import React, { useEffect, useRef } from 'react';
import './Overlay.css';

const Overlay = ({ isOpen, onClose, title, audioSrc, transcript }) => {
  const audioRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const titleId = "overlay-title";

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement;

      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }

      if (audioRef.current) {
        audioRef.current.play();
      }
    }

    return () => {
      // Return focus to the element that was focused before the overlay opened
      if (isOpen && previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen]);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), audio[controls]'
        );

        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="overlay-content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button className="close-button" onClick={onClose} aria-label="Close dialog" ref={closeButtonRef}>
          &times;
        </button>
        <h2 id={titleId}>{title}</h2>
        <audio controls preload="none" src={audioSrc} ref={audioRef} aria-label={`Audio recording for ${title}`}>
          Your browser does not support the audio element.
        </audio>
        <p style={{ whiteSpace: 'pre-wrap' }}>{transcript}</p>
      </div>
    </div>
  );
};

export default Overlay;
