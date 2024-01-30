import { Cog6ToothIcon as CogIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

import Whiteboard from '../../components/Svgr/Whiteboard';

const imageLoadDelay = 1000;
const elementShiftDelay = 3;
const reservedHeight = 680;
const reservedWidth = 740;

export default function CumulativeLayoutShift(): JSX.Element {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [isElementShifted, setIsElementShifted] = useState<boolean>(false);
  const [secondsUntilShift, setSecondsUntilShift] =
    useState<number>(elementShiftDelay);

  const shiftElementDelay = secondsUntilShift * imageLoadDelay;

  useEffect(() => {
    const loadImageTimeout = setTimeout(() => {
      setIsImageLoaded(true);
    }, imageLoadDelay);

    const shiftElementTimeout = setTimeout(() => {
      setIsElementShifted(true);
    }, shiftElementDelay);

    return () => {
      clearTimeout(loadImageTimeout);
      clearTimeout(shiftElementTimeout);
    };
  }, [shiftElementDelay]);

  useEffect(() => {
    if (secondsUntilShift > 0) {
      const interval = setInterval(() => {
        setSecondsUntilShift((currentSeconds) => currentSeconds - 1);
      }, imageLoadDelay);

      return () => clearInterval(interval);
    }
  }, [secondsUntilShift]);

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
          className={`flex min-h-[${reservedHeight}px] min-w-[${reservedWidth}px] items-center justify-center bg-neutral-800`}
        >
          {isImageLoaded ? (
            <Whiteboard />
          ) : (
            <CogIcon className='size-8 animate-spin' />
          )}
        </div>
      </section>
    </>
  );
}
