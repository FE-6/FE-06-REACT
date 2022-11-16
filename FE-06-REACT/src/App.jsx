// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import React from 'react';

import './index.css'
import Home from './pages/Home';
import Login from './components/LoginData';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
      </>
    </div>
  )
}

export default App