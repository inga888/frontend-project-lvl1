import getRandomInt from '../utils.js';
import playGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (b) {
    return gcd(b, a % b);
  }
  return Math.abs(a);
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
