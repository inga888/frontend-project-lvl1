import getRandomInt from '../getrandom.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  const randomNum = getRandomInt(1, 100);
  const question = randomNum;
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export { gameRule, playEvenGame };
