import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Entrar from './pages/Entrar/Index.jsx';
import Cadastrar from './pages/Cadastrar/Index.jsx';
import EsqueciMinhaSenha from './pages/EsqueciMinhaSenha/Index.jsx';
import ModificarSenha from './pages/ModificarSenha/Index.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Entrar />
  },
  {
    path: "/entrar",
    element: <Entrar />
  },
  {
    path: "/cadastrar",
    element: <Cadastrar />
  },
  {
    path: "/esqueci-minha-senha",
    element: <EsqueciMinhaSenha/>
  },
  {
    path: "/modificar-senha",
    element: <ModificarSenha/>
  },
  {
    path: "/boletos",
    element: <Boletos />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
