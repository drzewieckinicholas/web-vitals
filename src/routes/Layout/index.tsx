import { Outlet } from 'react-router-dom';

import Container from '../../components/Container';
import Nav from '../../components/Nav';

export default function Layout(): JSX.Element {
  return (
    <>
      <Nav />
      <main className='prose max-w-none p-4 md:prose-lg lg:prose-xl dark:prose-invert'>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
