import React from "react";
import questions from "./Config";

function DisplayQuiz(props) {

  const {currentquestion, setcurrentquestion, setquizcompleted, score, setscore} = props;

  const handleAnswerButtonClick = () => {
   
      setscore(score + 1);
    
    if (currentquestion + 1 < questions.length) {
      setcurrentquestion(currentquestion + 1);
    } else {
        setquizcompleted(true);
    }
  };

  return (
  <>
    <div className="question-section">
            <div className="question-count">
              <span>{currentquestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentquestion]?.QuestionText}
            </div>
          </div>
          <div className="answer-section">
              <button
              onClick={() => {
                handleAnswerButtonClick();
              }}
              >{questions[currentquestion].option1}</button>
              <button>{questions[currentquestion].option2}</button>
              <button>{questions[currentquestion].option3}</button>
              <button>{questions[currentquestion].option4}</button>
            {/* {questions[currentquestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => {
                  handleAnswerButtonClick(answerOption.isCorrect);
                }}
              >
                {answerOption.answerText}
              </button>
            ))} */}
          </div>
  </>
  );
}

export default DisplayQuiz;
