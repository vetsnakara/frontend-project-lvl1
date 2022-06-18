import _ from 'lodash';
import { isPrime } from '../cli.js';

const game = (function init() {
  let number = null;
  let correctAnswer = null;

  return {
    printGameTitle() {
      console.log(
        'Answer "yes" if given number is prime. Otherwise answer "no".',
      );
    },

    initQuestion() {
      number = _.random(1, 100);
      correctAnswer = isPrime(number) ? 'yes' : 'no';
    },

    getQuestion() {
      return number;
    },

    getCorrectAnswer() {
      return correctAnswer;
    },

    checkAnswer(answer) {
      return answer === correctAnswer;
    },
  };
}());

export default game;
