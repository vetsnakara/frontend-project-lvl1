import { getRandomNumber, getUserInput, isNumberEven } from './cli.js';

function getCorrectAnswer(number) {
  const isEven = isNumberEven(number);
  return isEven ? 'yes' : 'no';
}

function checkAnswer(number, answer) {
  const correctAnswer = getCorrectAnswer(number);
  return answer === correctAnswer;
}

function reportWrongAnswer(number, answer) {
  const correctAnswer = getCorrectAnswer(number);
  console.log(`'${answer}' is wrong ;(. Correct answer was '${correctAnswer}'`);
}

function run() {
  console.log('Welcome to the Brain Games!');

  const name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const MAX_CORRECT_ANSWERS_COUNT = 3;
  let correctAnswersCount = 0;

  while (correctAnswersCount < MAX_CORRECT_ANSWERS_COUNT) {
    const guessNumber = getRandomNumber();

    console.log(`Question: ${guessNumber}`);
    const answer = getUserInput(`Your answer: `);

    const isAnswerCorrect = checkAnswer(guessNumber, answer);

    if (isAnswerCorrect) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      reportWrongAnswer(guessNumber, answer);
      // reset correct answers
      correctAnswersCount = 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default run;
