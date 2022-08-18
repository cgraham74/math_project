// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }



import React, {useState} from 'react';


let score = 0;
let problemCounter = 0;
let correctAnswer = 0;
const operators = [];

const randomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

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

    const [checked, setChecked] = useState(false);

    return (
        <div id="checkboxHolder" className='operands'>
            <form>
            <label><input type="checkbox" checked={operators[0]} onChange= {a => setChecked(a.target.checked)} className="box" name='Addition'  value='+'/>+</label>
            <label><input type="checkbox" checked={operators[1]} onChange= {b => setChecked(b.target.checked)} className="box" name='Subtraction'  value='-'/>-</label>
            <label><input type="checkbox" checked={operators[2]} onChange= {c => setChecked(c.target.checked)} className="box" name='Multiplication' value='*'/>*</label>
            <label><input type="checkbox" checked={operators[3]} onChange= {d => setChecked(d.target.checked)} className="box" name='Division' value='/'/>/</label>
            </form>
        </div>
    )
};

/**
 * Creates random fake answers for answer boxes along side the correct answer
 */


export function RenderProblem(operator = '*') {
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

     return (
         <p>{firstNum} {secondNum}</p>
     )
}

export default function Answers() {


let answers; 

// const operatorName = ([{name: "Addition", oper: '+'},
//     {name: "Subtraction", oper: '-'}, 
//     {name: "Multiplication", oper: '*'}, 
//     {name: "Division", oper: '/'}]);
// const operators = [];
// let operator;

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


const shuffleArray = (arr) => {
    return arr.sort(function (a, b) { 
        return Math.random() - 0.5
    });
}

answers = shuffleArray([randomNumber(101), randomNumber(101), randomNumber(101), correctAnswer]);
    return (
      
        <section id="answers" className="show-hide">
            <RenderOperands />
            <ul>
                <li>{answers[0]}</li>
                <li>{answers[1]}</li>
                <li>{answers[2]}</li>
                <li>{answers[3]}</li>
            </ul>

        </section>
        
    )
}

