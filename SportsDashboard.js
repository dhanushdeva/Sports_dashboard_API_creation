import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../LiveScores.css';

const SportsDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <h1>Sports Dashboard</h1>
      <input
        type="text"
        placeholder="Search for a team..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />
      <div className="dashboard-content">
        <Link to="/live-scores" className="dashboard-link">
          View Live Scores
        </Link>
      </div>
    </div>
  );
};

export default SportsDashboard;
