import { useState } from "react";
import React from "react";
import RenderProblem from "./RenderProblem";
import RenderScore from "./RenderScore";
import Confetti from 'react-confetti';

let operators = [];
/**
 * Utility function to shuffle the items in an array
 * @param {object} arr
 */
function shuffleArray(arr) {
  return arr.sort(function (a, b) {
    return Math.random() - 0.5;
  });
}

/**
 * Random number generator that takes a single paramter and returns a random whole
 * number up to but excluding the number given
 * @param {*} max  The number given is not included - so be sure to add 1 to the max value you want
 * @returns A randomly generated whole number
 */
const randomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

/**
 *
 * @returns Reponsible for controlling the entire app - stores state, data, and direction.
 */
export default function Game() {
  const [buttonText, setButtonText] = useState(true);
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [problemCounter, setProblemCounter] = useState(0);
  const [startHide, setStartHide] = useState(true);
  const [operator, setOperator] = useState("*");
 

  function getCorrectAnswer(oper, firstNum, secondNum) {
    switch (oper) {
      case "+":
        return (firstNum + secondNum);
      case "-":
        return firstNum - secondNum;
      case "*":
        return firstNum * secondNum;
      case "/":
        return Number((firstNum / secondNum).toFixed(2));
      default:
        return firstNum * secondNum;
    }
  }

  /**
   * 
   * @returns An operator or * if no operator is selected
   */
function getRandomOperator(){
  let randomOperator = operators[randomNumber(operators.length)];
  return randomOperator ? randomOperator : "*";
}

/**
 * 
 */
  function updateExpression() {
    const newOperator = getRandomOperator();
    setOperator(newOperator);
    const firstNewNum = randomNumber(10);
    let secondNewNum = randomNumber(10);

    if (secondNewNum === 0 && newOperator === "/") {
      secondNewNum += 1;
    }

    setFirstNum(firstNewNum);
    setSecondNum(secondNewNum);
    const answer = getCorrectAnswer(newOperator, firstNewNum, secondNewNum);
    setCorrectAnswer(answer);
  }

  /**
   * Creates an unorderd list and renders it to the dom
   * and then renders the elements to the dom
   * @param {*} props can pass in an array of answers and sets a correct answer through the function call <RenderedAnswers/>
   * @returns An unorderd list of dom elements
   */
  function RenderAnswers(props) {
    const answers = props.answers.map((answer, index) => {
      return (
          <li className="answers"
            key={index}
            onClick={(e) => {
              setProblemCounter(problemCounter + 1);
              let currentAnswer = parseFloat(e.target.innerText);
              if (currentAnswer === correctAnswer) setScore(score + 1);
              if (problemCounter < 9) {
                updateExpression();
              } else {
                operators.splice(0, operators.length);
                setButtonText((prevText) => !prevText);
                setStartHide((prevHide) => !prevHide);
              }
            }}
          >
            {answer}
          </li> 
      );
    });
    return (
      <>
        <div id="answers">{!startHide && <ul>{answers}</ul>}</div>
      </>
    );
  }

  /**
   * Responsible for click events on the start button and resets the score and changes the button text
   * @returns a rendered button with text based on the state of the game
   */
  function StartOver() {
    function handleClick() {
      if (buttonText === true) {
        updateExpression();
      } else {
        operators.splice(0, operators.length);
      }
      setStartHide((prevHide) => !prevHide);
      setScore(0);
      setProblemCounter(0);
      setButtonText((prevText) => !prevText);
    }

    return (
      <button id="startOver" className="start" onClick={handleClick}>
        {buttonText ? "Start" : "Start Over"}
      </button>
    );
  }

  return (
    <>
    <div id="problem-answer">
      <RenderCheckbox hide={!startHide} />
      <RenderProblem
        firstNum={firstNum}
        secondNum={secondNum}
        hide={startHide}
        operator={operator}
      />
      <RenderScore
        problemCounter={problemCounter}
        score={score}
        hide={startHide}
      />
      {score === 10  ? <Confetti/> :
      <></>}
      {problemCounter === 10 && (
        <RenderScore
          problemCounter={problemCounter}
          score={score}
          hide={false}
        />
        
      )}
      
      <RenderAnswers
        correctAnswer={correctAnswer}
        answers={shuffleArray([
          randomNumber(100),
          randomNumber(100),
          randomNumber(100),
          correctAnswer,
        ])}
      />
     </div> 
      <StartOver />
    </>
  );
}

/**
 * Component that renders checkboxes to the dom and stores operators selected by the user
 * @returns Renders checkboxes to the screen and updates operators with the values contained within the checkboxes
 */
export function RenderCheckbox(props) {
  const handleChange = (event) => {
    if (event.target.checked) {
      operators.push(event.target.value);
      console.log(operators);
    } else {
      let index = operators.indexOf(event.target.value);
      operators.splice(index);
      console.log(operators);
    }
  };
  const checks = [
    {
    "name": "Addition",
    "value":"+"
  },
  {
    "name": "Subtraction",
    "value":"-"
  },
  {
    "name": "Multiplication",
    "value":"*"
  },
  {
    "name": "Division",
    "value":"/"
  },
]
  let selection = checks.map((item,id)=>{
    return (
      
          <label key={id}>
            <input
              type="checkbox"
              onChange={handleChange}
              className="box"
              name={item.name}
              value={item.value}
               />
            {item.name}
          </label>
      )}  
    )
  return (
    <div id="checkboxholder" className="operands">
      {!props.hide && (
    <form>
      <ul id="checks">
      {selection}
      </ul>
    </form>
    )}
    </div>
  )
}
