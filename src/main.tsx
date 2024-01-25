import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

import CumulativeLayoutShift from './routes/CumulativeLayoutShift/index.tsx';
import InteractionToNextPaint from './routes/InteractionToNextPaint/index.tsx';
import Layout from './routes/Layout/index.tsx';
import reportWebVitals from './utils/reportWebVitals.ts';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'cumulative-layout-shift',
        element: <CumulativeLayoutShift />,
      },
      {
        path: 'interaction-to-next-paint',
        element: <InteractionToNextPaint />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals(console.log);
