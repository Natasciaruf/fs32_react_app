import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
import Login from './Login.jsx';
import Register from './Register.jsx';
import Dashboard from './Dashboard.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* creo la rotta per la login */}
      <Route path='login' element={<Login />} />
      
      {/* creo la rotta per la registrazione */}
      <Route path='register' element={<Register/>} />

      {/* aggiungo la rotta Dashboard */}
      <Route path='dashboard' element={<Dashboard/>} />
    </Routes>
  </BrowserRouter>
);