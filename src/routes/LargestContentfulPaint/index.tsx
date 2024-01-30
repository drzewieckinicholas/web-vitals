import Whiteboard from '../../assets/Whiteboard.svg';

export default function LargestContentfulPaint(): JSX.Element {
  return (
    <>
      <header>
        <h1>Largest Contentful Paint</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </header>
      <section>
        <h2>Heading</h2>
        <img src={Whiteboard} alt='Whiteboard' />
      </section>
    </>
  );
}
