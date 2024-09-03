import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SportsDashboard from './components/SportsDashboard';
import LiveScores from './components/LiveScores';
import PlayerDetails from './components/playerDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Sports-Dashboard</Link>
          <Link to="/live-scores">Live-Scores</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SportsDashboard />} />
          <Route path="/live-scores" element={<LiveScores />} />
          <Route path="/player-details/:teamName" element={<PlayerDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
