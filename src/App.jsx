import { useState } from 'react';
import { useFormState } from 'react-dom';
import Footer from './components/footer/Footer';
import Start from './pages/start/Start';
import Play from './pages/play/Play';
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

</Routes>
</>
  );
}

export default App;


