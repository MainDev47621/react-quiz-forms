import React from 'react';

export function Answers({answers, addAnswer}) {
    const handleChange = (e) => {
        addAnswer(e.target.value);
    }

    return (
        <div onChange={handleChange}>
            {answers.map(answer => (
                <div>
                    <input
                        key={answer.num}
                        type='radio'
                        id={answer.num}
                        name='answer'
                        value={answer.answer} />
                    <label htmlFor={answer.num}>{answer.answer}</label>
                </div>
            ))}
        </div>
    )
}