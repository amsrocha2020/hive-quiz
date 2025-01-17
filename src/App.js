import React, { useState, useEffect, useRef } from 'react';

import dataQuiz from './api/questions';
import QuestionCount from './Components/QuestionCount';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import ModalDonation from './Components/ModalDonation';
import ModalNextLevel from './Components/ModalNextLevel';
import Start from './Components/Start';
import Logo from './logos/quiz-logo.png';

import './App.css';

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowLevel, setModalShowLevel] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [countCorrect, setCountCorrect] = useState(0);
  const [countIncorrect, setCountIncorrect] = useState(0);
  const [complete, setComplete] = useState(false);
  const [counter, setCounter] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [start, setStart] = useState(false);

  const handleAnswerSelected = (event) => {
    setUserAnswer(event.target.value);
  }

  const handleStart = () => {
    console.log('start')
    setIsActive(true);
    setStart(true);
  }

  const handleTryAgain = () => {
    setStart(true);
    setIsActive(true);
    setCountCorrect(0);
    setCountIncorrect(0);
    setComplete(false);
    setUserAnswer('');
    setQuestionNumber(0);
    setCounter(60);
  }

  useEffect(() => {
    countIncorrect === 3 && setIsActive(false);
  }, [countIncorrect])

  useEffect(() => {
    let interval = null;
    if (isActive) interval = setInterval(() => setCounter(counter => counter - 1), 1000);
    (!isActive && counter !== 0) && clearInterval(interval);
    if ( counter === 0 ) setIsActive(false);
    return () => clearInterval(interval);

  }, [counter, isActive]);

  const prevQuestionNumber = useRef();
  useEffect(() => {
    if (questionNumber === dataQuiz.length) {
      setComplete(true);
      setIsActive(false);
    }
    if (questionNumber <= dataQuiz.length - 1 ){
      if (userAnswer === dataQuiz[questionNumber].correct) {
        setIsCorrect(true);
        setCounter(60);
        setCountCorrect(c => c + 1);
        setTimeout(() => {
          if (dataQuiz[questionNumber].nextLevel === true) setModalShowLevel(true)
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
        <a href="/">
          <img className="logo" src={Logo} alt="logo hive" />
        </a>
        <p className="subTitle d-none d-sm-block">With this Quiz you will learn more about the Hive Blockchain!</p>
      </div>
      <div className="container-quiz">
        {(start && questionNumber !== dataQuiz.length && countIncorrect <= 2 && counter > 0) ? 
          (
          <>
            <div className="container">
                <QuestionCount 
                  currentQuestion={questionNumber + 1} 
                  total={dataQuiz.length} 
                  level={dataQuiz[questionNumber].level} 
                />
                <div className="countDown mt-2 mr-3">
                  <div className={"count " + (counter < 10 ? 'danger' : '')}>{counter} second(s)</div>
               </div>
                <Quiz 
                  content={dataQuiz[questionNumber]} 
                  onAnswerSelected={handleAnswerSelected} 
                  isCorrect={isCorrect}
                />
            </div>
          </>
          )
          : (start) ? 
            (<Result 
              countCorrect={countCorrect} 
              countIncorrect={countIncorrect} 
              counter={counter} 
              complete={complete}
              handleTryAgain={handleTryAgain}
            />)
          :
          <Start  handleStart={handleStart}/>
        }
      </div>
      <footer>
        <div>
          <span 
            className="donate" 
            onClick={() => setModalShow(true)}
          >DONATE HIVE</span>
        </div>
        <div>Made by <a className="author" href="https://hive.blog/@portugalcoin">@portugalcoin</a> with <i className="fa fa-heart"></i> for Hive Users</div>
      </footer>
      <ModalDonation 
        show={modalShow} 
        onHide={() => setModalShow(false)} 
      />
      { questionNumber <= dataQuiz.length - 1 ? 
        <ModalNextLevel 
          show={modalShowLevel} 
          onHide={() => setModalShowLevel(false)} 
          level={dataQuiz[questionNumber].level} 
        /> 
      : null 
      }
  </div>
  );
}

export default App;
