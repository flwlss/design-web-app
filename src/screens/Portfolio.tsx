import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { portfolioSquares } from "../common/constants";
import Container from "../components/Container";
import { PATHS } from "../navigation/paths";

const Portfolio = () => {

  const navigation = useNavigate()

  const { id } = useParams();
  console.log('id', id);

  return (
    <div className="portfolio-screen">
      <Container>
        <div>
          {portfolioSquares.map((item, index) => {
            if (item.id === id) {
              return (
                <div className="portfolio-screen__squares" key={index} >
                  {item.squares.map((item, index) => {
                    return (
                      <div
                        onClick={() => { item.name && navigation(PATHS.PORTFOLIO + id + '/' + item.name) }}
                        className="portfolio-screen__square"
                        key={index}>
                        <img
                          className="portfolio-screen__square__img"
                          src={item.mainImage} alt="" />
                      </div>
                    )
                  })}
                </div>
              )
            }
          })}
        </div>
      </Container>
    </div>
  )
}

export default Portfolio