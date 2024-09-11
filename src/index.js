import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./index.css";

import Home from "./Paginas/Home/home.js";
import Login from "./Paginas/Login/login.js";
import Perfil from "./Paginas/Perfil/perfil.js";
import Receitas from "./componentes/receitas.js";
import ReceitasPag from "./Paginas/Receitas/receitasPag.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/receitas",
    element: <Receitas />,
  },
  {
    path: "/receitas/:id",
    element: <ReceitasPag />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
