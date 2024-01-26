export const worker = new ComlinkWorker<typeof import('./worker.ts')>(
  new URL('./worker.ts', import.meta.url),
  {
    type: 'module',
  },
);
