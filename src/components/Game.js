import { useState } from "react";
import React from "react";
import RenderProblem from "./RenderProblem";
import RenderScore from "./RenderScore";

let correctAnswer = 0;
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

// export function Problem(props) {
//   // const randomNumber = (max) => {
//   //   return Math.floor(Math.random() * Math.floor(max));
//   // };

//   let result;

//   // const firstNum = randomNumber(10);
//   // const secondNum = randomNumber(10);
//   console.log("PROBLEM FUNCTION" + props.firstNum);
//   console.log("PROBLEM FUNCTION" + props.secondNum);
  // if (secondNum === 0 && props.operator === "/") {
  //   secondNum += 1;
  // }

  // switch ("*") {
  //   case "+":
  //     result = firstNum + secondNum;
  //     break;
  //   case "-":
  //     result = firstNum - secondNum;
  //     break;
  //   case "*":
  //     result = firstNum * secondNum;
  //     break;
  //   case "/":
  //     result = firstNum / secondNum;
  //     break;
  //   default:
//   correctAnswer = props.firstNum * props.secondNum;
//   console.log("CORRECT ANSWER" + correctAnswer);
//   //}
//   // correctAnswer = result;

//   return (
//     <>
//       <RenderProblem
//         firstNum={props.firstNum}
//         // operators={props.operator}
//         secondNum={props.secondNum}
//       />
//       {/* <RenderAnswers
//         answers={shuffleArray([
//           randomNumber(100),
//           randomNumber(100),
//           randomNumber(100),
//           correctAnswer,
//         ])}
//       /> */}
//     </>
//   );
// }

export default function Game() {
  const [buttonText, setButtonText] = useState(true);
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [problemCounter, setProblemCounter] = useState(0);
  const [startHide, setStartHide] = useState(true);
  const [operator, setOperator] = useState('*')
  //const [operators, setOperators] = useState(operators);

  function getCorrectAnswer(oper, firstNum, secondNum) {
    let result;

    switch (oper) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
      default:
      result = firstNum * secondNum
    }
    return result;
  }

  function getOperator() {
    let oper;
    if(operators.length === 0) {
      oper = "*";
    } else {
      oper = operators[randomNumber(operators.length)];
    }
    return oper;
  }

  function updateExpression() {
    let newOperator = getOperator();
    setOperator(newOperator); 
    let firstNewNum = randomNumber(10);
    let secondNewNum = randomNumber(10);
    if (secondNewNum === 0 && newOperator === "/") {
      secondNewNum += 1;
    }
    setFirstNum(firstNewNum);
    setSecondNum(secondNewNum);
    let answer = getCorrectAnswer(newOperator, firstNewNum, secondNewNum);
     // operator = operators[getRandomNumber(operators.length)];
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
        <>
          <li
            key={index}
            onClick={(e) => {
              setProblemCounter(problemCounter + 1);
              if (problemCounter < 9) {
                let currentAnswer = parseInt(e.target.innerText);
                if (currentAnswer === correctAnswer) setScore(score + 1);
                updateExpression();
              } else {
                setStartHide((prevHide) => !prevHide);
              }
            }}
          >
            {answer}
          </li>
        </>
      );
    });
    return (
      <>
        <div id="answers">{!startHide && <ul>{answers}</ul>}</div>
      </>
    );
  }

  function StartOver() {
    function handleClick() {
      setStartHide((prevHide) => !prevHide);
      setScore(0);
      setProblemCounter(0);
      setButtonText(prevText => !prevText);
      
    }

    return (
      <button id="startOver" className="start" onClick={handleClick}>
        {buttonText ? "Start": "Start Over"}
      </button>
    );
  }

  return (
    <>
      <RenderCheckbox />
      <RenderProblem firstNum={firstNum} secondNum={secondNum} hide={startHide} operator={operator} />
      <RenderScore problemCounter={problemCounter} score={score} hide={startHide}/>
      <RenderAnswers
        correctAnswer={correctAnswer}
        answers={shuffleArray([
          randomNumber(100),
          randomNumber(100),
          randomNumber(100),
          correctAnswer,
        ])}
      />
      <StartOver />
    </>
  );
}
  // operator = operators[getRandomNumber(operators.length)];


/**
 * 
 * @returns Renders checkboxes to the screen and updates operators with the values contained within the checkboxes
 */  
export function RenderCheckbox() {

    const handleChange = (event)=>{
      if (event.target.checked){
        operators.push(event.target.value)
        console.log(operators)
      } else {
        let index = operators.indexOf(event.target.value)
        operators.splice(index)
        console.log(operators)
      }
    }

  /**
   * Creating checkbox elements
   */
  return (
    <div id="checkboxHolder" className="operands">
      <form>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            className="box"
            name="Addition"
            value="+"
          />
          Addition
        </label>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            className="box"
            name="Subtraction"
            value="-"
          />
          Subtraction
        </label>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            className="box"
            name="Multiplication"
            value="*"
          />
          Multiplication
        </label>
        <label>
          <input
            type="checkbox"
            onChange={handleChange}
            className="box"
            name="Division"
            value="/"
          />
          Division
        </label>
      </form>
    </div>
  );
}

