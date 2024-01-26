import { Outlet } from 'react-router-dom';

import Nav from '../../components/Nav';

export default function Layout(): JSX.Element {
  return (
    <>
      <Nav />
      <main className='prose prose-neutral m-4 max-w-none p-4 dark:prose-invert'>
        <Outlet />
      </main>
    </>
  );
}
