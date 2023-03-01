import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../screens/Index';
import Portfolio from '../screens/Portfolio';
import { PATHS } from './paths';

const Router: React.FC = () => {
  
  return (
    <Routes>
      <Route path={PATHS.ROOT} element={<Index />} />
      <Route path={`${PATHS.PORTFOLIO}:id`} element={<Portfolio />} />
    </Routes>
  )
}

export default Router
