import React, {useState} from 'react';


let score = 0;
let problemCounter = 0;

export function RenderScore() {
    return (
        <p>
        Problem: <span className="currentProblem">{problemCounter}</span>/10 | Score: <span className="currentScore">{score}</span>
        </p>

    )
}
/**
 * Creating checkboxes
 */
export function RenderOperands() {
    return (
        <div id="checkboxHolder" className='operands'>
            <label><input type="checkbox" className="box" />+</label>
            <label><input type="checkbox" className="box" />-</label>
            <label><input type="checkbox" className="box"/>*</label>
            <label><input type="checkbox" className="box"/>/</label>
        </div>
    )
};

export default function Answers() {
    
let correctAnswer = 0;

let answers; 
const operatorName = ([{name: "Addition", oper: '+'},
    {name: "Subtraction", oper: '-'}, 
    {name: "Multiplication", oper: '*'}, 
    {name: "Division", oper: '/'}]);
const operators = [];
let operator;

//Hide elements at game start-up
const startGame = () => {
    document.getElementById('problem').classList.add('hidden');
    document.getElementById('answers').classList.add('hidden');
    document.querySelector('.expression').classList.add('hidden');
    display();
}
//Creates an element to display the expressions and sets an id attribute.
const display = () => {
    const p = document.createElement('p');
    p.setAttribute("id", "newProblem");
    const divExpress = document.querySelector('.expression');
    divExpress.appendChild(p);
}




/**
 * 
 * @param {*} event 
 */
const isCorrect = (event) => {
    const selection = event.target.innerText;
    const currentProblem = document.querySelector('.currentProblem');
    const currentScore = document.querySelector('.currentScore');

    if (selection == correctAnswer) score++;

    problemCounter++;

    currentProblem.innerText = problemCounter;
    currentScore.innerText = score;
}


/**
 * Utility function to generate a random number based on max
 * @param {number} max
 */
const randomNumber = (max) =>  Math.floor(Math.random() * Math.floor(max));

/**
 * Creates random fake answers for answer boxes along side the correct answer
 */

const performOperation = (operator = '*') => {
    let firstNum = 0;
    let secondNum = 0;
    let result;
    firstNum = randomNumber(10);
    secondNum = randomNumber(10);

    if (secondNum === 0 && operator === '/') {
        secondNum += 1;
    }
  
    switch(operator) {
      case '+':
        result = firstNum + secondNum;
      break;
      case '-':
          result = firstNum - secondNum;
      break;
      case '*':
          result = firstNum * secondNum;
      break;
      case '/':
          result = firstNum / secondNum;
      break;
      default : result = firstNum * secondNum;
    }

    correctAnswer = result;
    //p.innerText = firstNum + "  " + operator + "  " + secondNum;
    
}

const shuffleArray = (arr) => {
    return arr.sort(function (a, b) { 
        return Math.random() - 0.5
    });
}

performOperation();
answers = shuffleArray([randomNumber(101), randomNumber(101), randomNumber(101), correctAnswer]);
    return (
       
        <section id="answers" className="show-hide">
            
            <ul>
                <li>{answers[0]}</li>
                <li>{answers[1]}</li>
                <li>{answers[2]}</li>
                <li>{answers[3]}</li>
            </ul>

        </section>
        
    )
}

