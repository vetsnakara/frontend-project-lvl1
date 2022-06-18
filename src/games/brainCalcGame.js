import _ from 'lodash';
import { getRandomNumber } from '../cli.js';

const OPERATIONS = ['+', '-', '*'];

const game = (function () {
  let operandA = null;
  let operandB = null;
  let operation = null;
  let correctAnswer = null;

  return {
    printGameTitle() {
      console.log('What is the result of the expression?');
    },

    initQuestion() {
      operandA = getRandomNumber();
      operandB = getRandomNumber();
      operation = _.sample(OPERATIONS);
      correctAnswer = calc(operandA, operandB, operation);
    },

    getQuestion() {
      return [operandA, operation, operandB].join(' ');
    },

    getCorrectAnswer() {
      return correctAnswer;
    },

    checkAnswer(answer) {
      return Number(answer) === correctAnswer;
    },
  };

  // Functions
  // ...........................
  function calc(a, b, op) {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      default:
        throw new Error('Unexpected operation');
    }
  }
})();

export default game;
