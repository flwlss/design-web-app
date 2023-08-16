import React from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../navigation/paths";

interface IPortfolioButtonProps {
  route: string;
}

const PortfolioButton = (props: IPortfolioButtonProps) => {
  const navigation = useNavigate();

  const action = () => {
    navigation(PATHS.PORTFOLIO + props.route);
  };

  return (
    <button onClick={action} className="portfolio-btn">
      portfolio
    </button>
  );
};

export default PortfolioButton;
