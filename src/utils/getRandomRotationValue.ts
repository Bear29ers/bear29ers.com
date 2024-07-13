const getRandowmRotationValue = (range: number): number => {
  return Math.random() * (range * 2) - range;
};

export default getRandowmRotationValue;
