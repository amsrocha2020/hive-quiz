import React from 'react';

const Anwsers = ({answers, questionId, onAnswerSelected, isCorrect}) => {
    let idAnwser = 0;
    return (
      <ul className="answerOptions">
          {answers.map((item) => {
              return (
                <li key={questionId + idAnwser++} className="answerOption">
                  <input 
                    type="radio" 
                    className={isCorrect ? "radioCustomButton" : "radioCustomButton error"}  
                    name="radioGroup" 
                    id={item} 
                    value={item}
                    onChange={onAnswerSelected}
                    />
                  <label className={isCorrect ? "radioCustomLabel" : "radioCustomLabel error"} htmlFor={item}>
                      {item}
                  </label>
                </li>
              )
            } 
          )}
      </ul>
  )
}

export default Anwsers;