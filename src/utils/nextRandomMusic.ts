export function nextRandomMusic(maxIndex: number, current: number): number {
  const randomIndex = Math.floor(Math.random() * maxIndex);

  if (randomIndex === current) {
    return nextRandomMusic(maxIndex, current);
  }

  return randomIndex;
}
