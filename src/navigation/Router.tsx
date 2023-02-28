import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DesignPortfolio from '../screens/DesignPortfolio';
import Index from '../screens/Index';
import { PATHS } from './paths';

const Router: React.FC = () => {
  
  return (
    <Routes>
      <Route path={PATHS.ROOT} element={<Index />} />
      <Route path={PATHS.DESIGN_PORTFOLIO} element={<DesignPortfolio />} />
    </Routes>
  )
}

export default Router
