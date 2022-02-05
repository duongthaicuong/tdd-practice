const sumClamp = (numbers: number[], clamp: number) : number => {
  return Math.min(numbers.reduce((sum, number) => sum + number, 0), clamp)
}

export default sumClamp;