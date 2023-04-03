import React from "react";
import { useState } from "react";
import CreateQuiz from "./CreateQuiz";

function WelcomeScreen() {
  const [welcome, setwelcome] = useState(true);
  function handleClick() {
    setwelcome(false);
  }

  return (
    <>
      {welcome ? (
        <>
          <div className="welcome-screen">
            <div>Welcome, Let's Create A Quiz for You</div>
            <button
              onClick={() => {
                handleClick();
              }}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <>
        <CreateQuiz/>
        </>
      )}
    </>
  );
}

export default WelcomeScreen;
