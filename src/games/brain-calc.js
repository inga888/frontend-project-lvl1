import getRandomInt from '../utils.js';
import playGame from '../index.js';

const gameRule = 'What is the result of the expression?';

const calculate = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      throw new Error('Sorry, not available operator');
  }
};

const genGameData = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = calculate(num1, num2, randomOperator);
  const result = [question, String(correctAnswer)];
  return result;
};

const playCalcGame = () => playGame(gameRule, genGameData);
export default playCalcGame;
