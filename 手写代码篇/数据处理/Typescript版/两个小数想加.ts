function numvereplilon(arge1: number, arg2: number) {
  const EPSILON = Number.EPSILON; //误差
  return Math.abs(arge1 - arg2) < EPSILON;
}
