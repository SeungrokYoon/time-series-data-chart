import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NotFoundPage from './pages/NotFoundPage'
import RootPage from './pages/RootPage'

const router = createBrowserRouter([
  { path: '/', element: <RootPage /> },
  { path: '*', element: <NotFoundPage /> },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
