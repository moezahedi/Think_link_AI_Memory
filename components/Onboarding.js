import React from 'react';
import { Link } from 'react-router-dom';

export default function Onboarding() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="memory-board">
        <h2 className="game-title text-center mb-3">Welcome to Think & Link – AI Memory!</h2>
        <p className="text-center text-light mb-4">
          This game will teach you about AI ethics through fun memory challenges.
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/" className="btn btn-warning memory-btn">Go to Dashboard</Link>
        </div>
      </div>
    </div>
  );
} 