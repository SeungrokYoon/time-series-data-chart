import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import NotFoundPage from './pages/NotFoundPage'
import RootPage from './pages/RootPage'
import { store } from './store/store'
import GlobalStyle from './styles/base/GlobalStyle'

const router = createBrowserRouter([
  { path: '/', element: <RootPage /> },
  { path: '*', element: <NotFoundPage /> },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
