import React from 'react';
import Question from './Question';
import Anwsers from './Anwsers';

const Quiz = ({ content, onAnswerSelected, isCorrect}) => {
  return (
    <div key={content.questionId}>
      <Question question={content.question} />
      <Anwsers answers={content.answers} questionId={content.questionId} onAnswerSelected={onAnswerSelected} isCorrect={isCorrect}/>
    </div>
  )
}

export default Quiz;