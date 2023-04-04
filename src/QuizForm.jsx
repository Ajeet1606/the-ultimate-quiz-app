import React, { useState } from "react";
import my_arr from "./Config";
import { database } from "./firebase";

const QuestionForm = (props) => {

  const {setquizcreated} = props;
  const [pushedIntoArray, setpushedIntoArray] = useState(false);

  const initialQuestion = [
    {
      questionText: "",
      answerOptions: [
        { option: "", isCorrect: false },
        { option: "", isCorrect: false },
        { option: "", isCorrect: false },
        { option: "", isCorrect: false },
      ],
    },
  ]
  const [questions, setQuestions] = useState(initialQuestion);

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
    setpushedIntoArray(false);
  };

  const handleAnswerOptionChange = (e, questionIndex, optionIndex) => {
    const { name, value } = e.target;
    const newQuestions = [...questions];
    newQuestions[questionIndex].answerOptions[optionIndex][name] =
      name === "isCorrect" ? e.target.checked : value;
    setQuestions(newQuestions);
    setpushedIntoArray(false);
  };

  const renderAnswerOptions = (questionIndex) => {
    return questions[questionIndex].answerOptions.map((answerOption, index) => (
      <div className="answer-section-input">
        <div key={index} className="every-answer-block-input">
        <input
            type="checkbox"
            name="isCorrect"
            checked={answerOption.isCorrect}
            onChange={(e) => handleAnswerOptionChange(e, questionIndex, index)}
          />
          <input
            type="text"
            name="option"
            value={answerOption.option}
            onChange={(e) => handleAnswerOptionChange(e, questionIndex, index)}
          />
          
        </div>
      </div>
    ));
  };

  const renderQuestions = () => {
    return questions.map((question, index) => (
      <div className="question-section-input">
        <div className="question-count-input">
          <span>Q. </span>
        </div>
        <div key={index} className="question-text-input">
          <input
            type="text"
            name="questionText"
            value={question.questionText}
            onChange={(e) => handleQuestionChange(e, index)}
          />
          
        </div>
      </div>
    ));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if(pushedIntoArray === false){
      my_arr.push(questions[0]);
    }
    console.log(my_arr);
    setQuestions(initialQuestion);
   

    //firebase connection
    const databaseRef = database.ref("questions");
    const newChildRef = databaseRef.push();
    newChildRef.set(my_arr);


    // fetching back data.
    // const uniqueKey = newChildRef.key();
    // newChildRef.once("value", (snapshot) => {
    //   const array = snapshot.val();
    //   my_array = array;
    // });

    setquizcreated(true);
  };

  const handleAddQuestion = () => {
    console.log(questions[0]);
    my_arr.push(questions[0]);
    console.log(my_arr);
    setpushedIntoArray(true);
    setQuestions(initialQuestion);
  };

  return (
    <div>
      <h3>Enter the Question and Answer Options</h3>
      <form onSubmit={handleSubmit}>
        {renderQuestions()}
        {renderAnswerOptions(0)}
        <button type="button" onClick={handleAddQuestion}>Next</button>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default QuestionForm;
