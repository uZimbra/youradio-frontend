function convertDurationToTimeString(duration: number): string {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  if (hours) {
    return [hours, minutes, seconds]
      .map((unit) => String(unit).padStart(2, "0"))
      .join(":");
  } else {
    return [minutes, seconds]
      .map((unit) => String(unit).padStart(2, "0"))
      .join(":");
  }
}

export { convertDurationToTimeString };
