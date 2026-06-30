import { StrictMode, type ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Adm from './pages/Adm.tsx'
import Judge from './pages/Judge.tsx'
import Login from './pages/Login.tsx'

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
