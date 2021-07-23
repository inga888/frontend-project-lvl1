import getRandomInt from '../utils.js';
import playGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const genGameData = () => {
  const randomNum = getRandomInt(1, 100);
  const question = randomNum;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  const result = [question, correctAnswer];
  return result;
};

const playEvenGame = () => playGame(gameRule, genGameData);
export default playEvenGame;
