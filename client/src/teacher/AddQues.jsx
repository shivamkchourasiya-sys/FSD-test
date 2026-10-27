import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddQues = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState(0);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    alert('Question added successfully!');
    setQuestion('');
    setOptions(['', '', '', '']);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Add Questions to Quiz</h2>
      <form onSubmit={handleAddQuestion} style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Question Text:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter the question"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <h4>Options:</h4>
        {options.map((opt, idx) => (
          <div key={idx} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="radio"
              name="correct"
              checked={correctOption === idx}
              onChange={() => setCorrectOption(idx)}
            />
            <input
              type="text"
              value={opt}
              onChange={(e) => handleOptionChange(idx, e.target.value)}
              placeholder={`Option ${idx + 1}`}
              required
              style={{ flex: 1, padding: '6px' }}
            />
          </div>
        ))}

        <br />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Add Next Question
          </button>
          <button type="button" onClick={() => navigate('/teacher/view-quiz')} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Finish & View Quizzes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQues;