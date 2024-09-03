import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../LiveScores.css';

const PlayerDetails = () => {
  const { teamName } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        const foundTeam = data.scores.find(
          (game) => game.home_team.name === teamName
        );
        if (foundTeam) {
          setTeam(foundTeam);
        }
      } catch (error) {
        console.error('Error fetching player details:', error);
      }
    };
    fetchScores();
  }, [teamName]);

  return (
    <div className="player-details-container">
      <h2>Player Details for {teamName}</h2>
      {team ? (
        <ul className="player-list">
          {team.players.map((player, index) => (
            <li key={index} className="player-item">
              <div className="player-name">{player.name}</div>
              <div className="player-position">{player.position}</div>
              <div className="player-stats">{player.stats}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No players found.</p>
      )}
    </div>
  );
};

export default PlayerDetails;
