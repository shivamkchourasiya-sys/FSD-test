import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import StuDashboard from './student/StuDashboard';
import AttemptQuiz from './student/AttemptQuiz';
import ViewResult from './student/ViewResult';


import CreateQuiz from './teacher/CreateQuiz';
import AddQues from './teacher/AddQues';
import ViewQuiz from './teacher/ViewQuiz';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', padding: '20px' }}>
        <nav style={{ paddingBottom: '15px', borderBottom: '1px solid #ccc', marginBottom: '20px', display: 'flex', gap: '20px' }}>
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/student">Student Dashboard</Link>
          <span>|</span>
          <Link to="/teacher/view-quiz">Teacher Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome! Select Student or Teacher dashboard from above.</h2>} />

         
          <Route path="/student" element={<StuDashboard />} />
          <Route path="/student/attempt-quiz" element={<AttemptQuiz />} />
          <Route path="/student/view-result" element={<ViewResult />} />

          
          <Route path="/teacher/create-quiz" element={<CreateQuiz />} />
          <Route path="/teacher/add-ques" element={<AddQues />} />
          <Route path="/teacher/view-quiz" element={<ViewQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;