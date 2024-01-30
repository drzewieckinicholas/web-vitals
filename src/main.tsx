import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import CumulativeLayoutShift from './routes/CumulativeLayoutShift';
import Home from './routes/Home';
import InteractionToNextPaint from './routes/InteractionToNextPaint';
import LargestContentfulPaint from './routes/LargestContentfulPaint/index.tsx';
import Layout from './routes/Layout';
import reportWebVitals from './utils/reportWebVitals.ts';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: 'cls',
        element: <CumulativeLayoutShift />,
      },
      {
        path: 'inp',
        element: <InteractionToNextPaint />,
      },
      {
        path: 'lcp',
        element: <LargestContentfulPaint />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

reportWebVitals(console.log);
