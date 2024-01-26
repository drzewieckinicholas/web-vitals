import './index.css';

import { SignalIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='m-4 flex items-center justify-between rounded-md bg-neutral-800 p-4'>
      <SignalIcon className='h-8 w-8' />
      <ul className='flex'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/cls'>Cumulative Layout Shift</Link>
        </li>
        <li>
          <Link to='/inp'>Interaction to Next Paint</Link>
        </li>
      </ul>
    </nav>
  );
}
