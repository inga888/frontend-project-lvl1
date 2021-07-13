import getRandomInt from '../getrandom.js';
import playGame from '../index.js';

const gameRule = 'What is the result of the expression?';

const gameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `Question: ${num1} ${randomOperator} ${num2}`;
  let correctAnswer;
  // eslint-disable-next-line default-case
  switch (randomOperator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
  }
  const result = [question, String(correctAnswer)];
  return result;
};

const playCalcGame = () => playGame(gameRule, gameData);
export { gameRule, playCalcGame };
