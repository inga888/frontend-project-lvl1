import readlineSync from 'readline-sync';

const  numberOfRounds = 3;

const playGame = (gameRule, getData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(gameRule);

  for (let i = 0; i < numberOfRounds, i += 1) {
      const [question, correctAnswer] = getData();
      console.log(`Question: ${question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer !== correctAnswer) {
          console.log(`${userAnswer is wrong answer ;(. Correct answer was ${correctAnswer}.`);
          console.log(`Let's try again, ${userName}!`);
          return;
      }
      console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
  };
export default playGame;
