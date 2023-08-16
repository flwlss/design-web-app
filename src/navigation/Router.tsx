import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../screens/Index";
import Portfolio from "../screens/Portfolio";
import PortfolioItem from "../screens/PortfolioItem";
import { PATHS } from "./paths";

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={PATHS.ROOT} element={<Index />} />
      <Route path={`${PATHS.PORTFOLIO}:id`} element={<Portfolio />} />
      <Route path={`${PATHS.PORTFOLIO}:id/:id`} element={<PortfolioItem />} />
    </Routes>
  );
};

export default Router;
