import { getUserInput } from './cli.js';

const MAX_CORRECT_ANSWERS_COUNT = 3;

function runGame(game) {
  console.log('Welcome to the Brain Games!');

  const name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}!`);

  game.printGameTitle();

  let correctAnswersCount = 0;

  while (correctAnswersCount < MAX_CORRECT_ANSWERS_COUNT) {
    console.log(`Question: ${game.getQuestion()}`);
    const answer = getUserInput(`Your answer: `);

    const isAnswerCorrect = game.checkAnswer(answer);

    if (isAnswerCorrect) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${answer}' is wrong ;(. Correct answer was '${game.getCorrectAnswer()}'`
      );
      // reset correct answers
      correctAnswersCount = 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default runGame;
