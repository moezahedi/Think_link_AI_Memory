import React from 'react';

export default function Dashboard() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="memory-board">
        <h1 className="game-title text-center">Welcome to Think & Link – AI Memory!</h1>
        <h4 className="text-center" style={{ color: '#ffb366', fontWeight: 400, marginBottom: '2.2rem' }}>
          Choose an option to start
        </h4>
        <nav className="d-flex flex-column align-items-center gap-3">
          <button className="btn btn-warning memory-btn mb-2">Start Onboarding</button>
          <button className="btn btn-warning memory-btn mb-2">Play Level 1</button>
          <button className="btn btn-warning memory-btn mb-2">View Library</button>
          <button className="btn btn-warning memory-btn mb-2">Login</button>
          <button className="btn btn-warning memory-btn mb-2">Register</button>
          <button className="btn btn-warning memory-btn mb-2">Play as Guest</button>
        </nav>
      </div>
    </div>
  );
} 
