import React from "react";
import { useState } from "react";
import questions from "./Config";
import { database } from "./firebase";
import QuizCreatedScreen from "./QuizCreatedScreen";

function CreateQuiz() {
  // state variables
  const [quizcreated, setquizcreated] = useState(false);
  const [Question, setQuestion] = useState({
    QuestionText: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  // helper functions

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setQuestion({ ...Question, [name]: value });
  };

  // Called on next button click
  function pushIntoArray() {
    questions.push(Question);

    console.log(Question);

    setQuestion({
      QuestionText: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });

    // console.log(questions);
  }

  // Called on form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    pushIntoArray();

    //firebase connection
    const databaseRef = database.ref("questions");
    const newChildRef = databaseRef.push();
    newChildRef.set(questions);

    setQuestion({
      QuestionText: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
    });

    // questions.length -= questions.length;

    // const uniqueKey = newChildRef.key();
    // newChildRef.once("value", (snapshot) => {
    //   const array = snapshot.val();
    //   questions = array;
    //   console.log(array);
    // });

    setquizcreated(true);
  };

  return (
    <>
      {quizcreated ? (
        <>
          <QuizCreatedScreen />
        </>
      ) : (
        <>
          <div>
            <h3>Enter the Question and Answer Options</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-control question-section-input">
                <div className="question-count-input">
                  <span>Q. </span>
                </div>
                <div className="question-text-input">
                  <input
                    type="text"
                    name="QuestionText"
                    value={Question.QuestionText}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-control answer-section-input">
                <div className="every-answer-block-input">
                  <span>1.</span>
                  <input
                    type="text"
                    name="option1"
                    value={Question.option1}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="every-answer-block-input">
                  <span>2.</span>
                  <input
                    type="text"
                    name="option2"
                    value={Question.option2}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="every-answer-block-input">
                  <span>3.</span>
                  <input
                    type="text"
                    name="option3"
                    value={Question.option3}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="every-answer-block-input">
                  <span>4.</span>
                  <input
                    type="text"
                    name="option4"
                    value={Question.option4}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form-control btn-input">
                <button type="button" onClick={pushIntoArray}>
                  Next
                </button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default CreateQuiz;
