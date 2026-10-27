import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewQuiz = () => {
  const navigate = useNavigate();

  const quizzes = [
    { id: 1, title: 'React Fundamentals', totalQuestions: 10, createdAt: '2026-03-25' },
    { id: 2, title: 'JavaScript Advanced', totalQuestions: 15, createdAt: '2026-03-26' }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Created Quizzes</h2>
      <button 
        onClick={() => navigate('/teacher/create-quiz')} 
        style={{ marginBottom: '20px', padding: '8px 16px', cursor: 'pointer' }}
      >
        + Create New Quiz
      </button>

      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '600px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Quiz Title</th>
            <th>Questions</th>
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz) => (
            <tr key={quiz.id}>
              <td>{quiz.title}</td>
              <td>{quiz.totalQuestions}</td>
              <td>{quiz.createdAt}</td>
              <td>
                <button onClick={() => navigate('/teacher/add-ques')} style={{ cursor: 'pointer' }}>
                  Edit Questions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewQuiz;