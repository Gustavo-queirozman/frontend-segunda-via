import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './index.css';
import Entrar from './pages/Entrar/Index.jsx';
import Cadastrar from './pages/Cadastrar/Index.jsx';
import EsqueciMinhaSenha from './pages/EsqueciMinhaSenha/Index.jsx';
import ModificarSenha from './pages/ModificarSenha/Index.jsx';
import Boletos from './pages/boletos/Index.jsx';
import Boleto from './pages/boleto/Index.jsx';
import Documento from './pages/Documento/Index.jsx';
import Detalhe from './pages/Detalhe/Index.jsx';
import Demonstrativo from './pages/Demonstrativo/Index.jsx';

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
    element: <Boletos/>
  },
  {
    path: "/boleto",
    element: <Boleto/>
  },
  {
    path: "/documento",
    element: <Documento/>
  },
  {
    path: "/detalhe",
    element: <Detalhe/>
  },
  {
    path: "/demonstrativo",
    element: <Demonstrativo/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
