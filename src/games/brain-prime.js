import getRandomInt from '../utils.js';
import playGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 === 0 && num > 2) return false;
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const genGameData = () => {
  const randomNum = getRandomInt(1, 100);
  const question = randomNum;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const result = [question, correctAnswer];
  return result;
};

const playPrimeGame = () => playGame(gameRule, genGameData);
export default playPrimeGame;
