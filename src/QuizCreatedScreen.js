import React from "react";
import DisplayQuiz from './DisplayQuiz'
import ShowScoreScreen from './ShowScoreScreen'
import { useState } from "react";

function QuizCreatedScreen() {
  const [currentquestion, setcurrentquestion] = useState(0);
  const [score, setscore] = useState(0);
  const [quizcompleted, setquizcompleted] = useState(false);
  const [quizstarted, setquizstarted] = useState(false);

    const startQuiz = (state) => {
        setquizstarted(state);
    };

  return (
    <>
      {!quizstarted ? (
        <>
          <div className="start-quiz-screen">
            <div className="start-quiz-screen-header">
              Let's Start the Play!
            </div>
            <button onClick={() => {startQuiz("true")}}>Next</button>
          </div>
        </>
      ) : (
        <>
            {!quizcompleted ? (
                <>
                    <DisplayQuiz currentquestion={currentquestion} setcurrentquestion = {setcurrentquestion} setquizcompleted = {setquizcompleted} score = {score} setscore = {setscore} />
                </>
            ) : (
                <>
                    <ShowScoreScreen setcurrentquestion = {setcurrentquestion} score = {score} setscore = {setscore} setquizcompleted = {setquizcompleted} quizstarted = {quizstarted} managequizstart = {startQuiz}/>
                </>
            )
            }
        </>
      )}
    </>
  );
}

export default QuizCreatedScreen;
