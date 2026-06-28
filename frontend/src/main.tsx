import { StrictMode, type ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Adm from './Pages/Adm.tsx'
import Judge from './Pages/Judge.tsx'
import Login from './Pages/Login.tsx'

const routes: Record<string, ReactElement> = {
  '/': <Login />,
  '/adm': <Adm />,
  '/judge': <Judge />,
  '/login': <Login />,
}

const currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/'
const currentPage = routes[currentPath] ?? <Login />

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {currentPage}
  </StrictMode>,
)
