import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, redirect } from "react-router";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login.jsx';
import Register from './Register.jsx';
import Dashboard from './Dashboard.jsx';

const root = document.getElementById("root");

async function checkSessions(){
  if(localStorage.getItem("userSession")){
   throw redirect("/dashboard")
  }
  return null
}

async function checkNoSession() {
  if(!localStorage.getItem("userSession")){
    throw redirect("/login")
  }
  return null
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"login",
    element:<Login/>,
    loader: checkSessions
  },
  {
    path:"register",
    element:<Register/>,
    loader: checkSessions
  },
{
  path:"dashboard",
  element: <Dashboard/>,
  loader: checkNoSession
}

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);