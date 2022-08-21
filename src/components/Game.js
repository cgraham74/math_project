import { useState } from "react";
import React from "react";
import RenderProblem from "./RenderProblem";
import RenderScore from "./RenderScore";

let correctAnswer = 0;

/**
 * Utility function to shuffle the items in an array
 * @param {object} arr
 */
function shuffleArray(arr) {
  return arr.sort(function (a, b) {
    return Math.random() - 0.5;
  });
}

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
//   // if (secondNum === 0 && props.operator === "/") {
//   //   secondNum += 1;
//   // }

//   // switch ("*") {
//   //   case "+":
//   //     result = firstNum + secondNum;
//   //     break;
//   //   case "-":
//   //     result = firstNum - secondNum;
//   //     break;
//   //   case "*":
//   //     result = firstNum * secondNum;
//   //     break;
//   //   case "/":
//   //     result = firstNum / secondNum;
//   // //     break;
//   //   default:
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

// export function RenderAnswers(props) {
//   let [score, setScore] = useState(0);
//   let [problemCounter, setProblemCounter] = useState(0);

//   const answers = props.answers.map((answer) => {
//     return (
//       <>
//         <li
//           onClick={(e) => {
//             setProblemCounter(problemCounter + 1);
//             let currentAnswer = parseInt(e.target.innerText);
            
//             console.log("CurrentAnswers: " + currentAnswer);
//             console.log("CorrectAnswer: " + props.correctAnswer);

//             if (currentAnswer === props.correctAnswer) setScore(score + 1);
//           }}
//         >
//           {answer}
//         </li>
//       </>
//     );
//   });
//   return (
//     <>
//       <RenderScore problemCounter={problemCounter} score={score} />
//       <section id="answers">
//         <ul>{answers}</ul>
//       </section>
//     </>
//   );
// }

export default function Game() {
  const [firstNum, setFirstNum] = useState(randomNumber(10));
  const [secondNum, setSecondNum] = useState(randomNumber(10));
  const [correctAnswer, setCorrectAnswer] = useState(firstNum * secondNum);
  const [score, setScore] = useState(0);
  const [problemCounter, setProblemCounter] = useState(0);

  function updatefExpression() {
    let firstNewNum = randomNumber(10);
    let secondNewNum = randomNumber(10);
    setFirstNum(firstNewNum);
    setSecondNum(secondNewNum);
    setCorrectAnswer(firstNewNum * secondNewNum)
  }

  function RenderAnswers(props) {
    
    const answers = props.answers.map((answer) => {
      return (
        <>
          <li
            onClick={(e) => {
              setProblemCounter(problemCounter + 1);
              let currentAnswer = parseInt(e.target.innerText);
              if (currentAnswer === correctAnswer) setScore(score + 1);
              updatefExpression();
            }}
          >
            {answer}
          </li>
        </>
      );
    });
    return (
      <>
        <RenderScore problemCounter={problemCounter} score={score} />
        <section id="answers">
          <ul>{answers}</ul>
        </section>
      </>
    );
  }

  return (
    <>
      <RenderProblem
        firstNum={firstNum}
        secondNum={secondNum}
      />
      <RenderAnswers correctAnswer={correctAnswer}
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

export function StartOver() {
  function reset() {
    document.getElementById("checkboxHolder").style.display = "";
    document.getElementById("start").style.display = "";
    document.getElementById("game").classList.add("show-hide");
    document.getElementById("startOver").classList.add("show-hide");
  }

  return (
    <button id="startOver" className="start show-hide" onClick={reset}>
      Start Over
    </button>
  );
}

// export function RenderCheckbox() {
//   const [addition, setAddition] = useState(false);
//   const [subtraction, setSubtraction] = useState(false);
//   const [multiplication, setMultiplication] = useState(false);
//   const [division, setDivision] = useState(false);

//   /**
//    * Adding operands to the array based on which check boxes are used
//    * In the event a user changes their mind and unchecks a box - the value is removed from the operators array
//    *
//    */

//   const setAdd = () => {
//     setAddition(!addition);
//     if (!addition) {
//       operators[0] = "+";
//     }

//     if (addition) {
//       operators[0] = null;
//     }

//   };

//   const setSub = () => {
//     setSubtraction(!subtraction);
//     if (!subtraction) {
//       operators[1] = "-";
//     }

//     if (subtraction) {
//       operators[1] = null;
//     }

//   };

//   const setMult = () => {
//     setMultiplication(!multiplication);
//     if (!multiplication) {
//       operators[2] = "*";
//     }

//     if (multiplication) {
//       operators[2] = null;
//     }

//   };
//   const setDiv = () => {
//     setDivision(!division);
//     if (!division) {
//       operators[3] = "/";
//     }

//     if (division) {
//       operators[3] = null;
//     }

//   };

//   /**
//    * Creating checkbox elements
//    */
//   return (
//     <div id="checkboxHolder" className="operands">
//       <form>
//         <label>
//           <input
//             type="checkbox"
//             checked={addition}
//             onChange={setAdd}
//             className="box"
//             name="Addition"
//             value="+"
//           />
//           Addition
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={subtraction}
//             onChange={setSub}
//             className="box"
//             name="Subtraction"
//             value="-"
//           />
//           Subtraction
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={multiplication}
//             onChange={setMult}
//             className="box"
//             name="Multiplication"
//             value="*"
//           />
//           Multiplication
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={division}
//             onChange={setDiv}
//             className="box"
//             name="Division"
//             value="/"
//           />
//           Division
//         </label>
//       </form>
//     </div>
//   );
//}


// export function Start() {
//   return (
//     <button id="start" className="start" onClick={displayGame}>
//       Start Game
//     </button>
//   );
// }

// export function displayGame() {
//   document.getElementById("checkboxHolder").style.display = "none";
//   document.getElementById("start").style.display = "none";
//   document.getElementById("game").classList.remove("show-hide");
//   document.getElementById("startOver").classList.remove("show-hide");
//   return <></>;
// }