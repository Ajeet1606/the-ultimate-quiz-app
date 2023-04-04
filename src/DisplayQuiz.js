import React from "react";
import my_array from "./Config";

function DisplayQuiz(props) {

  const {currentquestion, setcurrentquestion, setquizcompleted, score, setscore} = props;

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect === true)
      setscore(score + 1);
    
    if (currentquestion + 1 < my_array.length) {
      setcurrentquestion(currentquestion + 1);
    } else {
        setquizcompleted(true);
    }
  };

  return (
  <>
    <div className="question-section">
            <div className="question-count">
              <span>{currentquestion + 1}</span>/{my_array.length}
            </div>
            <div className="question-text">
              {my_array[currentquestion]?.questionText}
            </div>
          </div>

          
          <div className="answer-section">
          {my_array[currentquestion].answerOptions.map((answerOption, index) => (
              <button key={index}
                onClick={() => {
                  handleAnswerButtonClick(answerOption.isCorrect);
                }}
              >
                {answerOption.option}
              </button>
              ))} 
            </div>

  </>
  );
}

export default DisplayQuiz;
