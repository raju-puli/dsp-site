import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './app-routing.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css'

const Router = createBrowserRouter(AppRouter);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
