import getRandomInt from '../getrandom.js';
import playGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) { let tmp = a; a = b; b = tmp;}
  while (true) {
    if (b === 0) return a;
    a %= b;
    if (a === 0) return b;
    b %= a;
  }
};

const gameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `Question: ${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);
  const result = [question, String(correctAnswer)];
  return result;
};

const playGcdGame = () => playGame(gameRule, gameData);
export { gameRule, playGcdGame };
