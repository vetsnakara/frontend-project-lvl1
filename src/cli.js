import readLineSync from 'readline-sync';

export function getUserInput(prompt) {
  return readLineSync.question(prompt);
}

export function greet() {
  const name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

export function isNumberEven(num) {
  return num % 2 === 0;
}
