import { useState } from 'react';

import Button from '../../components/Button';
import { longTask } from '../../utils/longTask.ts';
import { worker } from '../../worker/index.ts';

export default function InteractionToNextPaint(): JSX.Element {
  const [taskStatus, setTaskStatus] = useState<string>('');

  const handleWithWebWorker = async (): Promise<void> => {
    await worker.handleLongTask(2000);

    setTaskStatus('Long task completed with Web Worker!');
  };

  const handleWithoutWebWorker = (): void => {
    longTask(2000);

    setTaskStatus('Long task completed without Web Worker!');
  };

  return (
    <>
      <header>
        <h1>Interaction to Next Paint</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </header>
      <section>
        <h2>Web Workers</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button success rounded onClick={handleWithWebWorker}>
          Do Long Task With Web Worker
        </Button>
        <Button secondary rounded onClick={() => setTaskStatus('Interaction!')}>
          Click to Test Interactions
        </Button>
        <Button error rounded onClick={handleWithoutWebWorker}>
          Do Long Task Without Web Worker
        </Button>
        {taskStatus && <span className='text-green-500'>{taskStatus}</span>}
      </section>
    </>
  );
}
