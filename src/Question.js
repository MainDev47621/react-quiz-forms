import React from 'react';
import { Answers } from './Answers';
import { NavigateQuiz } from './NavigateQuiz';

export function Question({question, quizStatus, questions, addAnswer, gotoNextQuestion, gotoPrevQuestion}) {
    const quest = questions[question];

    return (
        <div>
            <h1>Question {quest.question}</h1>
            <Answers answers={quest.answers} addAnswer={addAnswer} />
            <NavigateQuiz question={question} gotoNextQuestion={gotoNextQuestion} gotoPrevQuestion={gotoPrevQuestion} />
        </div>
    );
}