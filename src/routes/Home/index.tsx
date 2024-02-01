import { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
  const [isElementShifted, setIsElementShifted] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsElementShifted(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <>
      <header>
        <h1>Web Vitals</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </header>
      <section className={isElementShifted ? 'mt-80' : undefined}>
        <h2>Heading</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
    </>
  );
}
