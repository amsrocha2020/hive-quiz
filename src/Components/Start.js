import React from "react";

const Start = ({ handleStart }) => {
  return (
    <div className="container">
      <div className="start-quiz text-center">
        <h1 className="mb-4">Welcome to Hive Quiz</h1>
        <p>In this Quiz, you will learn more about Hive Blockchain.</p>
        <p>To reach the end of the quiz <b>you can´t fail more than 3 questions</b></p>
        <h2 className="mt-5 mb-2">Are you ready?</h2>
        <button className="btn btn-success btn-start" onClick={handleStart} rel="nofollow noopener noreferrer">START</button>
      </div>
    </div>
  );
};

export default Start;
