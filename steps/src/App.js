import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
  const [ step, setStep ] = useState(1);
  const [ isOpen, setIsOpen ] = useState(true);

  function handleNext(){
    if(step < 3) setStep(step + 1);
  }

  function handlePrevious(){
    if(step > 1) setStep(step - 1);
  }

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <React.Fragment>
      <button onClick={handleOpen} className="close-button">&times;</button>
    {isOpen ?
    (<div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <div className="message">
        Step {step}: {messages[step - 1]}
      </div>

      <div className="buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>) : null}
    </React.Fragment>
  )
}