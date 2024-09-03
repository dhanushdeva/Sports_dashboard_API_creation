import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../LiveScores.css';

const LiveScores = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        if (data && Array.isArray(data.scores)) {
          setScores(data.scores);
        } else {
          console.error('Expected an array, but got:', data);
        }
      } catch (error) {
        console.error('Error fetching live scores:', error);
      }
    };
    fetchScores();
  }, []);

  return (
    <div className="live-scores-container">
      <h2>Live Scores</h2>
      <ul className="score-list">
        {scores.length > 0 ? (
          scores.map((game, index) => (
            <li key={index} className="score-item">
              <div className="team-names">
                {game.home_team.name} vs {game.away_team.name}
              </div>
              <div className="game-status">{game.status}</div>
              <div className="game-date">
                {game.date} - {game.time}
              </div>
              <Link to={`/player-details/${game.home_team.name}`} className="player-details-link">
                View Player Details
              </Link>
            </li>
          ))
        ) : (
          <p>No scores available.</p>
        )}
      </ul>
    </div>
  );
};

export default LiveScores;
