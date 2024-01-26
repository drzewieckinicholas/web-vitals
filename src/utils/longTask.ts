export const longTask = (ms: number): void => {
  const start = Date.now();

  while (Date.now() - start < ms) {
    // Do nothing.
  }
};
