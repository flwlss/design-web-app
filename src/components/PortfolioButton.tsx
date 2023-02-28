import React from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../navigation/paths";

const PortfolioButton = () => {

  const navigation = useNavigate()

  const action = () => {
    navigation(PATHS.DESIGN_PORTFOLIO)
  }

  return (
    <button
      onClick={action}
      className="portfolio-btn">
      portfolio
    </button>
  )
}

export default PortfolioButton