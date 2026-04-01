import { getRandomInt } from '../utils.js';

// Функция для генерации арифметической прогрессии
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

export const generateRound = () => {
  const start = getRandomInt(1, 10);
  const step = getRandomInt(1, 5);
  const length = getRandomInt(5, 10);
  const progression = generateProgression(start, step, length);

  // Выбираем случайный индекс для скрытия
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  // Заменяем элемент на '..'
  progression[hiddenIndex] = '..';

  // Формируем строку вопроса
  const question = progression.join(' ');

  return { question, correctAnswer };
};

export const gameDescription = 'What number is missing in the progression?';
