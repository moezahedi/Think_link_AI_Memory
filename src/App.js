import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Onboarding from './components/Onboarding';
import MemoryGame from './components/Game/MemoryBoard';
import Library from './components/Library';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Guest from './components/Auth/Guest';
import './styles/theme.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/game/:levelId" element={<MemoryGame />} />
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/guest" element={<Guest />} />
      </Routes>
    </Router>
  );
}
