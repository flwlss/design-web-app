import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { portfolioSquares } from "../common/utils";

const PortfolioItem = () => {

  const { id } = useParams();
  console.log('id', id);

  return (
    <div>
      <p>{id}</p>
    </div>
  )
}

export default PortfolioItem