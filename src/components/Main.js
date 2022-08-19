import React from "react";
import RenderAnswers from "./RenderAnswers";
import RenderProblem from "./RenderProblem";
import Score from "./RenderScore";
import { RenderCheckbox } from "./RenderCheckbox";

const operators = [];
let correctAnswer = 0;
 let firstNum = 0;
  let secondNum = 0;
  let operator;

const shuffleArray = (arr) => {
  return arr.sort(function (a, b) {
    return Math.random() - 0.5;
  });
};

const randomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export function Problem(oper) {
 
  let result;
  firstNum = randomNumber(10);
  secondNum = randomNumber(10);
  operator = oper;

  if (secondNum === 0 && operator === "/") {
    secondNum += 1;
  }

  switch (operator) {
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
      result = firstNum * secondNum;
  }

   correctAnswer = result;

}


export default function Main() {
  

  Problem("*");
  return (
    <>
      <RenderCheckbox />
      <RenderProblem firstNum ={firstNum} operator = {operator} secondNum = {secondNum}/>
      <Score problemCounter={10} score={10} />
      <RenderAnswers answers={shuffleArray([randomNumber(101), randomNumber(101), randomNumber(101), correctAnswer])} />
      <Button />
    </>
  );
}

export function Button () {
    //TODO Needs a state - to display "Start or Start Over"
    //Needs to reset the main window
    //Needs to 
    return (
        <button id="btnStartOver">Start Game</button>
    )
}


