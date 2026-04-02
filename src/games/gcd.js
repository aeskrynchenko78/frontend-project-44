import { getRandomInt } from '../utils.js'

const findGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export const generateRound = () => {
  const a = getRandomInt(1, 100)
  const b = getRandomInt(1, 100)
  const question = `${a} ${b}`
  const correctAnswer = String(findGCD(a, b))
  return { question, correctAnswer }
}

export const gameDescription = 'Find the greatest common divisor of given numbers.'
