import React from 'react';

export default function ExplanationModal({ open, onClose, explanation }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div className="modal-content" style={{
        padding: 32,
        borderRadius: 12,
        maxWidth: 400,
        textAlign: 'center',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)'
      }}>
        <div style={{ marginBottom: 16 }}>{explanation}</div>
        <button className="btn btn-warning memory-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
} 