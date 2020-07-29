import React from 'react'

const QuestionCount = ({ currentQuestion, total }) => {
  return (
    <div className="questionCount">Question {currentQuestion} of {total}</div>
  )
}

export default QuestionCount;
