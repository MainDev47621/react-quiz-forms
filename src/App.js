import React, { useState } form 'react';
import './App.css';
import { BeginQuiz } from './BeginQuiz';
import { Question } from './Question';
import { CompletedQuiz } from './CompletedQuiz';

function App() {
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizStatus, setQuizStatus] = useState('inProgress');

  const incrementQuestion = () => {
    setQuestion(question => question + 1);
  }

  return (
    <div className="App">
      { quizStatus === 'notTaken' && <BeginQuiz /> }
      { quizStatus === 'inProgress' && <Question /> }
      { quizStatus === 'completed' && <CompletedQuiz /> }
    </div>
  );
}

export default App;
