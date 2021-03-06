import readLineSync from 'readline-sync';

export function getUserInput(prompt) {
  return readLineSync.question(prompt);
}

export function getRandomNumber() {
  return Math.round(Math.random() * 100);
}

export function isNumberEven(num) {
  return num % 2 === 0;
}

export function greet() {
  const name = getUserInput('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export function gcd(n1, n2) {
  let a = n1;
  let b = n2;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
}

export function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}
