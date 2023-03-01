import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { portfolioSquares } from "../common/utils";
import Container from "../components/Container";

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
                  {item.links.map((item, index) => {
                    return (
                      <div className="portfolio-screen__square" key={index}>
                        <img className="portfolio-screen__square__img" src={item} alt=""  />
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