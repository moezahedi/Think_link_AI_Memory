import React from 'react';
import { Link } from 'react-router-dom';

export default function Guest() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="memory-board">
        <h2 className="game-title text-center mb-3">Play as Guest</h2>
        <p className="text-center text-light mb-4">
          Welcome, guest! You can play the game, but your progress won't be saved.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/" className="btn btn-warning memory-btn">Go to Dashboard</Link>
        </div>
      </div>
    </div>
  );
} 