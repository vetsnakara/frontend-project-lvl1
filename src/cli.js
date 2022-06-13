import readLineSync from 'readline-sync';

function greet() {
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export { greet };
