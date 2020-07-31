import React from 'react';
import { Badge } from 'react-bootstrap';

const QuestionCount = ({ currentQuestion, total, level }) => {
  return (
    <>
    <div className="questionCount">
      Question {currentQuestion} of {total} 
    </div>
      <Badge className="level" variant="success">Level {level}</Badge>
    </>
  )
}

export default QuestionCount;
