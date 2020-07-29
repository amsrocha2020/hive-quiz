import React from 'react';
import { Badge } from 'react-bootstrap';

const QuestionCount = ({ currentQuestion, total, level }) => {
  return (
    <div className="questionCount">
      Question {currentQuestion} of {total} 
      <Badge variant="success ml-3">Level {level}</Badge>
    </div>
  )
}

export default QuestionCount;
