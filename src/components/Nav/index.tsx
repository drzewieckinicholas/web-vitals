import './index.css';

import { SignalIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

import Container from '../Container';

export default function Nav(): JSX.Element {
  return (
    <nav className='bg-neutral-800 p-4'>
      <Container>
        <div className='flex items-center justify-between'>
          <SignalIcon className='size-8' />
          <ul className='flex'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/cls'>CLS</Link>
            </li>
            <li>
              <Link to='/inp'>INP</Link>
            </li>
            <li>
              <Link to='/lcp'>LCP</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
