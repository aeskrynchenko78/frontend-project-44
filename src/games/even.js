import { getRandomInt } from '../utils.js';

export const isEven = (number) => number % 2 === 0;

export const generateRound = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question: String(number), correctAnswer };
};
