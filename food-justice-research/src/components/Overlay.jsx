import React, { useEffect, useRef } from 'react';
import './Overlay.css';

const Overlay = ({ isOpen, onClose, title, audioSrc, transcript }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isOpen && audioRef.current) {
      audioRef.current.play();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <audio controls src={audioSrc} ref={audioRef}>
          Your browser does not support the audio element.
        </audio>
        <p style={{ whiteSpace: 'pre-wrap' }}>{transcript}</p>
      </div>
    </div>
  );
};

export default Overlay;
