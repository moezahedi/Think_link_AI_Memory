import React, { useState } from 'react';

export default function QuizModal({ open, onClose, question, options = [], onAnswer }) {
  const [selected, setSelected] = useState(null);
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
        <div style={{ marginBottom: 16 }}>{question}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          {options.map((opt, idx) => (
            <button
              key={idx}
              className={`btn memory-btn ${selected === idx ? 'btn-warning' : 'btn-secondary'}`}
              style={{
                padding: 8,
                borderRadius: 6,
                border: selected === idx ? '2px solid #f07f0e' : '1px solid #ccc',
                background: selected === idx ? '#e0f7fa' : '#232526',
                color: selected === idx ? '#232526' : '#fff',
                cursor: 'pointer',
              }}
              onClick={() => setSelected(idx)}
            >
              {opt}
            </button>
          ))}
        </div>
        <button className="btn btn-warning memory-btn" onClick={() => { if (selected !== null) { onAnswer(selected); onClose(); } }}>Submit</button>
        <button className="btn btn-secondary" onClick={onClose} style={{ marginLeft: 8 }}>Cancel</button>
      </div>
    </div>
  );
} 