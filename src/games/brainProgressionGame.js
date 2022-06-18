import _ from 'lodash';

const game = (function () {
  let progression = null;
  let index = null;
  let correctAnswer = null;

  return {
    printGameTitle() {
      console.log('What number is missing in the progression?');
    },

    initQuestion() {
      const length = _.random(5, 10);
      const delta = _.random(1, 5);
      const start = _.random(1, 100);

      progression = _.range(length).map((i) => start + i * delta);
      index = _.random(0, length - 1);

      correctAnswer = progression[index];
    },

    getQuestion() {
      const numbers = [...progression];
      numbers[index] = '..';
      return numbers.join(' ');
    },

    getCorrectAnswer() {
      return correctAnswer;
    },

    checkAnswer(answer) {
      return Number(answer) === correctAnswer;
    },
  };
})();

export default game;
