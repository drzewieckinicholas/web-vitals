import { Cog6ToothIcon as CogIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

import { Whiteboard } from '../../components/Svgr';

const contentLoadDelay = 1000;
const elementShiftDelay = 3;

export default function CumulativeLayoutShift(): JSX.Element {
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
  const [isElementShifted, setIsElementShifted] = useState<boolean>(false);
  const [secondsUntilShift, setSecondsUntilShift] =
    useState<number>(elementShiftDelay);

  const shiftElementDelay = secondsUntilShift * contentLoadDelay;

  useEffect(() => {
    const loadContentTimeout = setTimeout(() => {
      setIsContentLoaded(true);
    }, contentLoadDelay);

    const shiftElementTimeout = setTimeout(() => {
      setIsElementShifted(true);
    }, shiftElementDelay);

    return () => {
      clearTimeout(loadContentTimeout);
      clearTimeout(shiftElementTimeout);
    };
  }, [shiftElementDelay]);

  useEffect(() => {
    if (secondsUntilShift > 0) {
      const interval = setInterval(() => {
        setSecondsUntilShift((currentSeconds) => currentSeconds - 1);
      }, contentLoadDelay);

      return () => clearInterval(interval);
    }
  }, [secondsUntilShift]);

  const renderContent = () => {
    if (isContentLoaded) {
      return <Whiteboard />;
    }

    return <CogIcon className='size-8 animate-spin' />;
  };

  return (
    <>
      <header>
        <h1>Cumulative Layout Shift</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </header>
      <section className={isElementShifted ? 'mb-40' : undefined}>
        <h2>Layout Shifts</h2>
        <p>
          This section will cause a layout shift in {secondsUntilShift} seconds.
        </p>
      </section>
      <section>
        <h2>Statically reserve space for late-loading content</h2>
        <p>
          When placing late-loading content in the content flow, layout shifts
          can be avoided by reserving the space for them in the initial layout.
        </p>
        <div
          className='flex min-h-[680px] min-w-[740px] items-center justify-center bg-neutral-800'
        >
          {renderContent()}
        </div>
      </section>
    </>
  );
}
