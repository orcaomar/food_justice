import React, { useEffect, useRef } from 'react';
import './Overlay.css';

const Overlay = ({ isOpen, onClose, title, audioSrc, transcript }) => {
  const audioRef = useRef(null);
  const titleId = "overlay-title";

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
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
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button className="close-button" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 id={titleId}>{title}</h2>
        <audio controls src={audioSrc} ref={audioRef}>
          Your browser does not support the audio element.
        </audio>
        <p style={{ whiteSpace: 'pre-wrap' }}>{transcript}</p>
      </div>
    </div>
  );
};

export default Overlay;
