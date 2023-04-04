import React from "react";
import { useState } from "react";
import QuizCreatedScreen from "./QuizCreatedScreen";
import QuestionForm from "./QuizForm";

function CreateQuiz() {

  // state variables
  const [quizcreated, setquizcreated] = useState(false);
  
  
  // Called on form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    

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
        <QuestionForm quizcreated= {quizcreated} setquizcreated = {setquizcreated}/>
          
        </>
      )}
    </>
  );
}

export default CreateQuiz;
