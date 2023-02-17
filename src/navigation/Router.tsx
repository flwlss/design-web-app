import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../screens/About';
import Index from '../screens/Index';
import { PATHS } from './paths';

const Router: React.FC = () => {
  
  return (
    <Routes>
      <Route path={PATHS.ROOT} element={<Index />} />
      <Route path={PATHS.ABOUT} element={<About />} />
    </Routes>
  )
}

export default Router
