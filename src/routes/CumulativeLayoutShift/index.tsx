import { useEffect, useState } from 'react';

export default function CumulativeLayoutShift(): JSX.Element {
  const [shiftElement, setShiftElement] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShiftElement(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <header>
        <h1>Cumulative Layout Shift</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </header>
      <section className={shiftElement ? 'mt-80' : undefined}>
        <h2>Layout Shifts</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
    </>
  );
}
