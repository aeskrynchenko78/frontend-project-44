import { getRandomInt } from '../utils.js';

export const isEven = (number) => number % 2 === 0;

export const generateRound = () => {
  const number = getRandomInt(1, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

