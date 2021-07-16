import getRandomInt from '../getrandom.js';
import playGame from '../index.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, 50);
  const progressionLength = getRandomInt(5, 10);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const gameData = () => {
  const progression = getProgression();
  const missingIndex = getRandomInt(0, progression.length - 1);
  const correctAnswer = String(progression[missingIndex]);
  let questionProgression = [];
  for (const item of progression) {
    if (item === progression[missingIndex]) {
      questionProgression.push('..');
      continue;
    }
    questionProgression.push(item);
  }
  questionProgression = questionProgression.join();
  const question = `Question: ${questionProgression}`;
  const result = [question, correctAnswer];
  return result;
};

const playProgrGame = () => playGame(gameRule, gameData);
export { gameRule, playProgrGame };
