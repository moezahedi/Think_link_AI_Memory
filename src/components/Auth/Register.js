import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="memory-board">
        <h2 className="game-title text-center mb-3">Register</h2>
        <form className="mb-3">
          <div className="mb-3">
            <label className="form-label text-light">Email:</label>
            <input type="email" name="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Password:</label>
            <input type="password" name="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-warning memory-btn w-100 mb-2">Register</button>
        </form>
        <p className="text-center text-light">Already have an account? <Link to="/login" className="text-warning">Login</Link></p>
        <p className="text-center text-light">Or <Link to="/guest" className="text-warning">play as guest</Link></p>
      </div>
    </div>
  );
} 