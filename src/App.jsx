import { useState } from 'react';
import { useFormState } from 'react-dom';
import Footer from './components/footer/Footer';
import Start from './pages/start/Start';
import Play from './pages/play/Play';
import Login from './pages/login/Login';
import Join from './pages/join/Join';
import About from './pages/about/About';
import Header from './components/header/Header';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';




function App() {
  

  return (
    <>
    <Routes>
<Route path="/" element={<Start />} />
<Route path="/play" element={<Play />} />
<Route path="/login" element={<Login />} />
<Route path="/join" element={<Join />} />
<Route path="/about" element={<About />} />

</Routes>
</>
  );
}

export default App;


