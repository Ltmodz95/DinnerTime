import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
