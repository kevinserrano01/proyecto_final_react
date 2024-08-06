import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Router.jsx'
import { PageProvider } from './contexts/PageContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Esta app tiene disponible la pagina actual y las rutas del router.
  <PageProvider>
    <RouterProvider router={Router} />
  </PageProvider>
)
