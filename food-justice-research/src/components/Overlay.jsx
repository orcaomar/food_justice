import React, { useEffect, useRef } from 'react';
import './Overlay.css';

const Overlay = ({ isOpen, onClose, title, audioSrc, transcript }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
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
    <div
      className="overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="overlay-title"
    >
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 id="overlay-title">{title}</h2>
        <audio controls src={audioSrc} ref={audioRef}>
          Your browser does not support the audio element.
        </audio>
        <p style={{ whiteSpace: 'pre-wrap' }}>{transcript}</p>
      </div>
    </div>
  );
};

export default Overlay;
