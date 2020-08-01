import React from 'react';
import { Alert } from 'react-bootstrap';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const Result = ({ countCorrect, countIncorrect, counter, complete, handleTryAgain }) => {
  const url = 'http://hivequiz.me';
  const shareText = 'Hive Quiz - Corrects: ' + countCorrect + " Incorrects: " +  countIncorrect;

  return (
    <div className="container">
      <div className="results pt-4">
      {countIncorrect !== 3 && counter !== 0 ? 
        <Alert className="text-center" variant="success">Corrects: {countCorrect}</Alert> 
      : 
        null
      }
      {counter !== 0 ? <Alert className="text-center" variant="danger">Incorrects: {countIncorrect}</Alert> : null }
      </div>
      {countIncorrect === 0 && complete ? 
        (
        <>
          <h3 className="text-center pt-3">Congratulations! Perfect!</h3>
          <p className="text-center">Tell your friends that you've learned more about Hive Blockchain</p>
          <div className="share-buttons pb-4">
            <FacebookShareButton 
              url={url}
              quote={shareText}
              hashtag="#hive"
            >
            <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton 
              url={url} 
              title={shareText}
              hashtag="#hive"
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <TelegramShareButton 
              url={url} 
              title={shareText}>
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
          </div>
        </>
        )
        : 
        (countIncorrect === 3 || counter === 0 ?
        (
        <>
          <div className="text-center pb-3 pt-3">
            <p className="text-center">Oh no!!! You need to learn more about Hive Blockchain.</p>
            <button className="btn btn-success" onClick={handleTryAgain} rel="nofollow noopener noreferrer">TRY AGAIN!</button>
          </div>
        </>
        ) 
        : 
        ( <>
          <h3 className="text-center pt-3">Congratulations!</h3>
          <p className="text-center">Tell your friends that you've learned more about Hive Blockchain</p>
          <div className="share-buttons pb-4">
            <FacebookShareButton 
              url={url}
              quote={shareText}
              hashtag="#hive"
            >
            <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton 
              url={url} 
              title={shareText}
              hashtag="#hive"
            >
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <TelegramShareButton 
              url={url} 
              title={shareText}>
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
          </div>
        </>)
       )}
    </div>
  )
}

export default Result;
