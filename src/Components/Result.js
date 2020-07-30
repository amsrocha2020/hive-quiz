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

const Result = ({ countCorrect, countIncorrect }) => {
  const url = 'http://hivequiz.tk';
  const shareText = 'Check this site!';

  return (
    <div className="container">
      <div className="results pt-4">
      {countIncorrect !== 3 ? 
        <Alert className="text-center" variant="success">Corrects: {countCorrect}</Alert> : null}
        <Alert className="text-center" variant="danger">Incorrects: {countIncorrect}</Alert>
      </div>
      {countIncorrect === 0 ? 
        (
        <>
          <h3 className="text-center pt-3">Congratulations! Perfect!</h3>
          <p className="text-center">Tell your friends that you've learned more about Hive Blockchain</p>
          <div className="share-buttons pb-4">
            <FacebookShareButton url={url}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} shareText={shareText}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <TelegramShareButton url={url} shareText={shareText}>
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
          </div>
        </>
        )
        : 
        (countIncorrect === 3 ?
        (
        <>
          <div className="text-center pb-3 pt-3">
            <p className="text-center">Oh no!!! You need to learn more about Hive Blockchain.</p>
            <a className="btn btn-success" href="/" rel="nofollow noopener noreferrer">TRY AGAIN</a>
          </div>
        </>
        ) : 
        (
        <>
          <h3 className="text-center pt-3">Congratulations!</h3>
          <p className="text-center">Tell your friends that you've learned more about Hive Blockchain</p>
          <div className="share-buttons pb-4">
            <FacebookShareButton url={url}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} shareText={shareText}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <TelegramShareButton url={url} shareText={shareText}>
              <TelegramIcon size={32} round={true} />
            </TelegramShareButton>
          </div>
        </>)
        )}
    </div>
  )
}

export default Result;
