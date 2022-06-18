import { getRandomNumber, gcd } from '../cli.js';

const game = (function init() {
  let a = null;
  let b = null;
  let correctAnswer = null;

  return {
    printGameTitle() {
      console.log('Find the greatest common divisor of given numbers.');
    },

    initQuestion() {
      a = getRandomNumber();
      b = getRandomNumber();
      correctAnswer = gcd(a, b);
    },

    getQuestion() {
      return `${a} ${b}`;
    },

    getCorrectAnswer() {
      return correctAnswer;
    },

    checkAnswer(answer) {
      return Number(answer) === correctAnswer;
    },
  };
}());

export default game;
