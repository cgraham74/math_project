
let correctAnswer = 0;
let score = 0;
let counter = 0;
let problemCounter = 0;
let answers;
const operatorName = ([{name: "Addition", oper: '+'},
    {name: "Subtraction", oper: '-'}, 
    {name: "Multiplication", oper: '*'}, 
    {name: "Division", oper: '/'}]);
const operators = [];
let operator;



function shuffleArray(arr) {
    return arr.sort(function (a, b) { 
        return Math.random() - 0.5
    });
}

/**
 * Utility function to generate a random number based on max
 * @param {number} max
 */
 function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  