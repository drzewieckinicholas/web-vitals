import { useState } from 'react';

import Button from '../../components/Button';
import { longTask } from '../../utils/longTask.ts';
import { worker } from '../../worker/index.ts';

export default function InteractionToNextPaint(): JSX.Element {
  const [taskStatus, setTaskStatus] = useState('');

  const handleWithWebWorker = async () => {
    await worker.handleLongTask(1000);

    setTaskStatus('Task completed with Web Worker!');
  };

  const handleWithoutWebWorker = () => {
    longTask(1000);

    setTaskStatus('Task completed without Web Worker!');
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
        <Button primary rounded onClick={handleWithWebWorker}>
          Run Task With Web Worker
        </Button>
        <Button secondary rounded onClick={handleWithoutWebWorker}>
          Run Task Without Web Worker
        </Button>
        {taskStatus && <p>{taskStatus}</p>}
      </section>
    </>
  );
}
