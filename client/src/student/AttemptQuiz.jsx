import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AttemptQuiz = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Answer: ${selectedOption}`);
    navigate('/student/view-result');
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Attempt Quiz</h2>
      <form onSubmit={handleSubmit}>
        <p><strong>Question 1:</strong> What is React?</p>
        <div>
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="A UI Library" 
              onChange={(e) => setSelectedOption(e.target.value)} 
            />
            A JavaScript library for building user interfaces
          </label>
        </div>
        <div>
          <label>
            <input 
              type="radio" 
              name="quiz" 
              value="A Database" 
              onChange={(e) => setSelectedOption(e.target.value)} 
            />
            A Database Management System
          </label>
        </div>
        
        <br />
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Submit Quiz
        </button>
      </form>
      <br />
      <button onClick={() => navigate('/student')} style={{ cursor: 'pointer' }}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default AttemptQuiz;