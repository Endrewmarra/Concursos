import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Adm from './pages/Adm.tsx';
import Judge from './pages/Judge.tsx';
import Login from './pages/Login.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/* BrowserRouter, Routes e Route para criar rotas usando React-router-dom, renderizar dinamicamente as telas sem precisar recarregar quando mudar de rota (precisa instalar biblioteca) */}
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Adm />} />
                <Route path="/judge" element={<Judge />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
