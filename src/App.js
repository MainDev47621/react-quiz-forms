import React, { useState } from 'react';
import './App.css';
import { BeginQuiz } from './BeginQuiz';
import { Question } from './Question';
import { CompletedQuiz } from './CompletedQuiz';
import questions from './questions';

function App() {
  const [question, setQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizStatus, setQuizStatus] = useState('inProgress');

  const gotoNextQuestion = () => {
    if (question >= questions.length - 1) {
      setQuizStatus('completed');
    } else {
      setQuestion(question => question + 1);
    }
  };

  const gotoPrevQuestion = () => {
    setQuestion(question => question - 1);
  }

  const addAnswer = (ans) => {
    //
  };

  return (
    <div className="App">
      { quizStatus === 'notTaken' && <BeginQuiz /> }
      { quizStatus === 'inProgress' && <Question question={question} quizStatus={quizStatus} questions={questions} addAnswer={addAnswer} gotoNextQuestion={gotoNextQuestion} gotoPrevQuestion={gotoPrevQuestion} /> }
      { quizStatus === 'completed' && <CompletedQuiz /> }
    </div>
  );
}

export default App;
