// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import { useDispatch } from 'react-redux';

import './index.css'
import Home from './pages/Home';
import { Login } from './components/LoginData';

import { Routes, Route } from "react-router-dom";

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(props);
    // FormData(dispatch, props.history);
  }, []);

  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="formdata" element={<FormData />} />
      </Routes>
      </>
    </div>
  )
}

export default App