import React from 'react';
import { Link } from 'react-router-dom';

const StuDashboard = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Student Dashboard</h1>
      <p>Welcome to your portal!</p>
      
      <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        <Link to="/student/attempt-quiz">
          <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Attempt Quiz
          </button>
        </Link>
        <Link to="/student/view-result">
          <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
            View Results
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StuDashboard;