import React, { useState, useEffect } from 'react';
import questions from './questions';

export function NavigateQuiz({question, gotoNextQuestion, gotoPrevQuestion}) {
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    useEffect(() => {
        console.log('use effect run');
        console.log(question);
        question === 0 ? setPrevDisabled(true) : setPrevDisabled(false);
        question === questions.length - 1 ? setNextDisabled(true) : setNextDisabled(false);
    }, [question]);

    const handleClick = (e) => {
        console.log('Test Nav');
        console.log(e.target.id);
        const btn = e.target.id;
        btn === 'prev' ? gotoPrevQuestion() : gotoNextQuestion();
    }
    
    return (
        <div>
            <button disabled={prevDisabled} onClick={handleClick} id='prev'>Prev</button>
            <button disabled={nextDisabled} onClick={handleClick} id='next'>Next</button>
            {nextDisabled && <button>Finish Quiz</button>}
        </div>
    );
}