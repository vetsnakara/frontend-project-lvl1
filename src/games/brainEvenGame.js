import { getRandomNumber, isNumberEven } from '../cli.js';

const game = {
  guessNumber: null,

  printGameTitle() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  },

  getQuestion() {
    this.guessNumber = getRandomNumber();
    return this.guessNumber;
  },

  getCorrectAnswer() {
    const isEven = isNumberEven(this.guessNumber);
    return isEven ? 'yes' : 'no';
  },

  checkAnswer(answer) {
    const correctAnswer = this.getCorrectAnswer();
    return answer === correctAnswer;
  },
};

export default game;
