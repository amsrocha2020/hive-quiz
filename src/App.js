import React, { useState, useEffect, useRef } from 'react';

import dataQuiz from './api/questions';
import QuestionCount from './Components/QuestionCount';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import ModalDonation from './Components/ModalDonation';

import Logo from './logos/hive-logo.png';

import './App.css';

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [countCorrect, setCountCorrect] = useState(0);
  const [countIncorrect, setCountIncorrect] = useState(0);

  const handleAnswerSelected = (event) => {
    setUserAnswer(event.target.value);
  }

  const prevQuestionNumber = useRef();
  useEffect(() => {
    if (questionNumber <= dataQuiz.length - 1 ){
      if (userAnswer === dataQuiz[questionNumber].correct) {
        setIsCorrect(true);
        setCountCorrect(c => c + 1);
        setTimeout(() => {
          setQuestionNumber(q => q + 1);
          setIsCorrect(false);
        }, 500);
      } else if (userAnswer !== '' && prevQuestionNumber.current === questionNumber) {
        setCountIncorrect(c => c + 1);
      }
      prevQuestionNumber.current = questionNumber;
    }
  },[userAnswer, questionNumber])

  return (
    <div className="quiz-app">
      
      <div className="header">
        <a href="/"><img className="logo" src={Logo} alt="logo hive"/></a>
        <p className="title">HIVE QUIZ</p>
        <p className="subTitle">With this Quiz you will learn more about the Hive platform!</p>
      </div>
      <div className="container-quiz">
          {(questionNumber !== dataQuiz.length && countIncorrect <= 2) ? 
          (
            <div className="container">
              <QuestionCount currentQuestion={questionNumber + 1} total={dataQuiz.length} level={dataQuiz[questionNumber].level} />
              <Quiz content={dataQuiz[questionNumber]} onAnswerSelected={handleAnswerSelected} isCorrect={isCorrect}/>
            </div>
          )
          : <Result countCorrect={countCorrect} countIncorrect={countIncorrect} />}
      </div>
      <footer>
        <div><span className="donate" onClick={() => setModalShow(true)}>DONATE HIVE</span></div>
        <div>Made by <a className="author" href="https://hive.blog/@portugalcoin">@portugalcoin</a> with <i className="fa fa-heart"></i> for Hive Users</div>
      </footer>
      <ModalDonation show={modalShow} onHide={() => setModalShow(false)} />
  </div>
  );
}

export default App;
