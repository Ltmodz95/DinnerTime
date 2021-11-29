import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/home/Home';
import Recipes from './Components/recipes/Recipes';
import PaddedLayout from './Layout/PaddedLayout';
import Recipe from './Components/recipe/Recipe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<PaddedLayout><Recipes /></PaddedLayout>} />
      <Route path="/recipe/:id" element={<PaddedLayout><Recipe /></PaddedLayout>} />
    </Routes>
  );
}

export default App;
