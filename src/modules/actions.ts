export async function sleep(min: number, max: number | null = null) {
  let ms = min;
  if (max !== null) {
    ms = Math.random() * (max - min) + min;
  }
  return new Promise(resolve => {
    setTimeout(resolve, min * 1000);
  });
}
