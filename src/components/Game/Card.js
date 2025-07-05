import React from 'react';

export default function Card({ isFlipped, onClick, image, label }) {
  return (
    <div
      onClick={onClick}
      className="memory-card d-flex align-items-center justify-content-center"
      style={{
        width: 80,
        height: 100,
        margin: 8,
        fontSize: 24,
        cursor: isFlipped ? 'default' : 'pointer',
        userSelect: 'none',
        transition: 'background 0.2s',
      }}
    >
      {isFlipped ? (
        image ? <img src={image} alt={label} style={{ maxWidth: '70%', maxHeight: '70%' }} /> : label
      ) : (
        <span role="img" aria-label="card back">🧠</span>
      )}
    </div>
  );
} 