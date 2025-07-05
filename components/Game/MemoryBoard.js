import React, { useState, useEffect } from 'react';
import Card from './Card';
import ExplanationModal from './ExplanationModal';
import QuizModal from './QuizModal';
import levels from '../../data/levels.json';

// Sample card data (pairs)
const cardsData = [
  { id: 1, label: '🤖' },
  { id: 2, label: '🔒' },
  { id: 3, label: '💡' },
  { id: 4, label: '📱' },
  { id: 1, label: '🤖' },
  { id: 2, label: '🔒' },
  { id: 3, label: '💡' },
  { id: 4, label: '📱' },
];

// Shuffle cards
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function MemoryBoard() {
  // For now, always use level 1
  const level = levels[0];
  // Build the cards array from pairs
  const cardsData = shuffle(
    level.pairs.flatMap(([id1, id2]) => {
      const card = level.cards.find(c => c.id === id1);
      return [
        { ...card, pairId: id1 },
        { ...card, pairId: id2 }
      ];
    })
  );

  const [cards, setCards] = useState(cardsData);
  const [flipped, setFlipped] = useState([]); // indices of flipped cards
  const [matched, setMatched] = useState([]); // indices of matched cards
  const [turns, setTurns] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);

  function handleCardClick(idx) {
    if (flipped.length === 2 || flipped.includes(idx) || matched.includes(idx)) return;
    const newFlipped = [...flipped, idx];
    setFlipped(newFlipped);
    if (newFlipped.length === 2) {
      setTurns(turns + 1);
      const [i1, i2] = newFlipped;
      if (cards[i1].pairId === cards[i2].pairId) {
        setTimeout(() => {
          setMatched([...matched, i1, i2]);
          setFlipped([]);
          setExplanation(cards[i1].explanation);
          setShowExplanation(true);
          // Show quiz after first match only
          if (!quizAnswered) {
            setTimeout(() => setShowQuiz(true), 800);
            setQuizAnswered(true);
          }
        }, 800);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  }

  const allMatched = matched.length === cards.length;

  return (
    <div className="memory-board mt-5">
      <h2 className="game-title text-center mb-3">Memory Game Board</h2>
      <p className="text-center text-light mb-4">Level: {level.name} | Turns: {turns}</p>
      <div className="d-flex flex-wrap justify-content-center" style={{ gap: 8, maxWidth: 400, margin: '0 auto' }}>
        {cards.map((card, idx) => (
          <Card
            key={idx}
            isFlipped={flipped.includes(idx) || matched.includes(idx)}
            onClick={() => handleCardClick(idx)}
            label={card.label}
          />
        ))}
      </div>
      {allMatched && <div className="text-center mt-4" style={{ fontSize: 20, color: '#f07f0e' }}>🎉 All pairs matched! 🎉</div>}
      <ExplanationModal open={showExplanation} onClose={() => setShowExplanation(false)} explanation={explanation} />
      <QuizModal
        open={showQuiz}
        onClose={() => setShowQuiz(false)}
        question={level.quiz.question}
        options={level.quiz.options}
        onAnswer={idx => alert(idx === level.quiz.answer ? 'Correct!' : 'Try again!')}
      />
    </div>
  );
} 