import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewResult = () => {
  const navigate = useNavigate();

  const results = [
    { quizName: 'React Fundamentals', score: '8/10', status: 'Passed' },
    { quizName: 'JavaScript Basics', score: '9/10', status: 'Passed' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Quiz Results</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '500px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Quiz Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res, index) => (
            <tr key={index}>
              <td>{res.quizName}</td>
              <td>{res.score}</td>
              <td>{res.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={() => navigate('/student')} style={{ cursor: 'pointer', padding: '8px 16px' }}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default ViewResult;