import { useState } from "react";
import React from "react";

let operators = [null, null, null, null];
let correctAnswer = 0;

const shuffleArray = (arr) => {
  return arr.sort(function (a, b) {
    return Math.random() - 0.5;
  });
};

const randomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export function Problem(props) {
  const operator = props.operators[randomNumber(props.operators.length)];
  let result;

  if (props.secondNum === 0 && operator === "/") {
    props.secondNum += 1;
  }

  switch (operator) {
    case "+":
      result = props.firstNum + props.secondNum;
      break;
    case "-":
      result = props.firstNum - props.secondNum;
      break;
    case "*":
      result = props.firstNum * props.secondNum;
      break;
    case "/":
      result = props.firstNum / props.secondNum;
      break;
    default:
      result = props.firstNum * props.secondNum;
  }
  correctAnswer = result;

  return (
    <>
      <RenderProblem
        firstNum={props.firstNum}
        operator={operator}
        secondNum={props.secondNum}
      />
      <RenderAnswers
        answers={shuffleArray([
          randomNumber(101),
          randomNumber(101),
          randomNumber(101),
          correctAnswer,
        ])}
      />
    </>
  );
}

export function RenderProblem(props) {
  return (
    <div className="expression">
      <p>
        {props.firstNum} {props.operator} {props.secondNum}
      </p>
    </div>
  );
}

export function RenderAnswers(props) {
  let [score, setScore] = useState(0);
  let [problemCounter, setProblemCounter] = useState(0);

  const answers = props.answers.map((answer) => {
    return (
      <li
        onClick={(e) => {
          setProblemCounter(problemCounter + 1);
          let currentAnswer = parseInt(e.target.innerText);

          console.log("CurrentAnswers: " + currentAnswer);
          console.log("CorrectAnswer: " + correctAnswer);

          if (currentAnswer === correctAnswer) setScore(score + 1);
        }}
      >
        {answer}
      </li>
    );
  });
  return (
    <>
      <Score problemCounter={problemCounter} score={score} />
      <section id="answers">
        <ul>{answers}</ul>
      </section>
    </>
  );
}

export function Score(props) {
  return (
    <p>
      Problem: <span className="currentProblem">{props.problemCounter}</span>/10
      | Score: <span className="currentScore">{props.score}</span>
    </p>
  );
}

export default function Game() {
  let [firstNum, setFirstNum] = useState(randomNumber(10));
  let [secondNum, setSecondNum] = useState(randomNumber(10));

  return (
    <>
      <Problem
        firstNum={firstNum}
        operators={operators}
        secondNum={secondNum}
      />
    </>
  );
}

export function displayGame() {
  document.getElementById("checkboxHolder").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("game").classList.remove("show-hide");
  document.getElementById("startOver").classList.remove("show-hide");

  return (
    <>
      <Problem
        firstNum={randomNumber(10)}
        operators={operators}
        secondNum={randomNumber(10)}
      />
    </>
  );
}

export function Start() {
  //TODO Needs a state - to display "Start or Start Over"
  //Needs to reset the main window
  //Needs to
  return (
    <button id="start" className="start" onClick={displayGame}>
      Start Game
    </button>
  );
}

export function StartOver() {
  function reset() {
    // score = 0;
    // problemCounter = 0;

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

export function RenderCheckbox() {
  const [addition, setAddition] = useState(false);
  const [subtraction, setSubtraction] = useState(false);
  const [multiplication, setMultiplication] = useState(false);
  const [division, setDivision] = useState(false);

  /**
   * Adding operands to the array based on which check boxes are used
   * In the event a user changes their mind and unchecks a box - the value is removed from the operators array
   */
  const setAdd = () => {
    setAddition(!addition);
    if (!addition) {
      operators[0] = "+";
    }

    if (addition) {
      operators[0] = null;
    }
    console.log("Operators @ renderCheckbox " + operators);
  };

  const setSub = () => {
    setSubtraction(!subtraction);
    if (!subtraction) {
      operators[1] = "-";
    }

    if (subtraction) {
      operators[1] = null;
    }
    console.log(operators);
  };

  const setMult = () => {
    setMultiplication(!multiplication);
    if (!multiplication) {
      operators[2] = "*";
    }

    if (multiplication) {
      operators[2] = null;
    }
    console.log(operators);
  };
  const setDiv = () => {
    setDivision(!division);
    if (!division) {
      operators[3] = "/";
    }

    if (division) {
      operators[3] = null;
    }
    console.log(operators);
  };

  /**
   * Creating checkbox elements
   */
  return (
    <div id="checkboxHolder" className="operands">
      <form>
        <label>
          <input
            type="checkbox"
            checked={addition}
            onChange={setAdd}
            className="box "
            name="Addition"
            value="+"
          />
          Addition
        </label>
        <label>
          <input
            type="checkbox"
            checked={subtraction}
            onChange={setSub}
            className="box "
            name="Subtraction"
            value="-"
          />
          Subtraction
        </label>
        <label>
          <input
            type="checkbox"
            checked={multiplication}
            onChange={setMult}
            className="box "
            name="Multiplication"
            value="*"
          />
          Multiplication
        </label>
        <label>
          <input
            type="checkbox"
            checked={division}
            onChange={setDiv}
            className="box "
            name="Division"
            value="/"
          />
          Division
        </label>
      </form>
    </div>
  );
}
