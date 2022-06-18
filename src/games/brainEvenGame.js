import { getRandomNumber, isNumberEven } from '../cli.js';

function calcCorrectAnswer(number) {
  const isEven = isNumberEven(number);
  return isEven ? 'yes' : 'no';
}

const game = (function init() {
  let guessNumber = null;
  let correctAnswer = null;

  return {
    printGameTitle() {
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
    },

    initQuestion() {
      guessNumber = getRandomNumber();
      correctAnswer = calcCorrectAnswer(guessNumber);
    },

    getQuestion() {
      return guessNumber;
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
