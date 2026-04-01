import { getRandomInt } from '../utils.js';

// Функция для проверки, является ли число простым
const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export const generateRound = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question: String(number), correctAnswer };
};

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
