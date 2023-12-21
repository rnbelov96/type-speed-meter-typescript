const getRandomNumberBetweenRange = (
  min: number,
  max: number,
  exept: number,
) : number => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number === exept
    ? getRandomNumberBetweenRange(min, max, exept)
    : number;
};

export default getRandomNumberBetweenRange;
