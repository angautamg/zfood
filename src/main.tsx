import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import appRouter from './App.tsx'   // 👈 import the router

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={appRouter} />   {/* 👈 use RouterProvider */}
  </StrictMode>,
)
