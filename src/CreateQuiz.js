import React from "react";
import { useState } from "react";
import QuizCreatedScreen from "./QuizCreatedScreen";
import QuestionForm from "./QuizForm";

function CreateQuiz() {

  // state variables
  const [quizcreated, setquizcreated] = useState(false);


  return (
    <>
      {quizcreated ? (
        <>
          <QuizCreatedScreen />
        </>
      ) : (
        <>
        <QuestionForm setquizcreated = {setquizcreated}/>
          
        </>
      )}
    </>
  );
}

export default CreateQuiz;
