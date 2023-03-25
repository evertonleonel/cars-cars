import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Error404 from './routes/Error404';

import Home from './routes/Home';
import Welcome from './routes/Welcome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
    errorElement: <Error404 />,
  },
  {
    path: 'home',
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
