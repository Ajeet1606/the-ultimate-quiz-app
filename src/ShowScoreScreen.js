import React from 'react'
import questions from './Config';

function ShowScoreScreen(props) {
    const {setcurrentquestion, score, setscore, setquizcompleted, quizstarted, managequizstart} = props;

    function handleClick(){
        setcurrentquestion(0);
        setscore(0);
        setquizcompleted(false);
        managequizstart(!quizstarted);
    }

  return (
    <>
        <div className="score-screen">
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
            <button
            onClick={() => {
                handleClick();
            }}
            >Restart Quiz</button>
          </div>
    </>
  )
}

export default ShowScoreScreen;