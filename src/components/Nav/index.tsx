import { SignalIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <SignalIcon />
      <ul>
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
