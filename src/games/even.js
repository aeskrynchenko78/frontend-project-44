export const isEven = (number) => number % 2 === 0;

export const generateRound = () => {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question: number, correctAnswer };
};
