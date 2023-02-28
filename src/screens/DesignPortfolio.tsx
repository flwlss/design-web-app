import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

const DesignPortfolio = () => {

  const navigation = useNavigate()

  return (
    <div className="portfolio-screen">
      <Container>
        <div className="portfolio-screen__squares">
          <div className="portfolio-screen__square">
            <img src="" alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DesignPortfolio