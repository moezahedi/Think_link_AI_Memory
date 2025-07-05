import React from 'react';
import { Link } from 'react-router-dom';

export default function MemoryBoard() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="memory-board">
        <h2 className="game-title text-center mb-3">Memory Game</h2>
        <p className="text-center text-light mb-4">
          Memory game component is working!
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/" className="btn btn-warning memory-btn">Back to Dashboard</Link>
        </div>
      </div>
    </div>
  );
} 
