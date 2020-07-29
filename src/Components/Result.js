import React from 'react';
import { Alert } from 'react-bootstrap';

const Result = ({ countCorrect, countIncorrect }) => {
  return (
    <div className="container">
      <h2 className="text-center pb-3 pt-3">RESULTS</h2>
      {countIncorrect !== 3 ? 
        <Alert className="text-center" variant="success">Corrects: {countCorrect}</Alert> : null}
        <Alert className="text-center" variant="danger">Incorrects: {countIncorrect}</Alert>
      {countIncorrect === 0 ? 
        (
        <>
          <h3 className="text-center pb-3 pt-3">Congratulations! Perfect!</h3>
          <div className="text-center pb-3 pt-5">
            <a className="btn btn-success" href="https://hive.blog" rel="nofollow noopener noreferrer">GO TO HIVE</a>
          </div>
        </>
        )
        : 
        (countIncorrect === 3 ?
        (
        <>
          <div className="text-center pb-3 pt-3">
            <a className="btn btn-success" href="/" rel="nofollow noopener noreferrer">TRY AGAIN</a>
          </div>
        </>
        ) : 
        (
        <>
          <h4 className="text-center">Try again for a better result!</h4> 
          <div className="text-center pb-3 pt-3">
            <a className="btn btn-success" href="/" rel="nofollow noopener noreferrer">TRY AGAIN</a>
          </div>
        </>)
        )}
    </div>
  )
}

export default Result;
